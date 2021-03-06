const PostsModel = require('../../models/posts.model');
const CommentModel = require('../../models/comments.model');
const Authentication = require('../../shared/authentication');
const DataLoader = require('dataloader');

class PostResolver {
    static async getPosts({ _id: UserId } = {}, { PostedBy, Auth } = {}) {
        if(Auth !== undefined) {
            await new Authentication(Auth).validate();
        }
        const query = {};
        if(UserId || PostedBy) {
            query.PostedBy = UserId || PostedBy;
        }
        const posts = await new PostsModel().posts.find(query).lean().exec();
        return posts.map(post => ({ ...post, Id: post._id }));
    }

    static async getPost({ PostId: CommentedFor } = {}, { PostId, Auth } = {}) {
        if(Auth !== undefined) {
            await new Authentication(Auth).validate();
        }
        const post = await new PostsModel().posts.findById(CommentedFor || PostId).lean().exec();
        if(!post) {
            throw new Error('Post not found');
        }
        post.Id = PostId;
        return post;
    }

    static async loadPost({ PostId } = {}) {
        return await postLoader.load(PostId);
    }

    static async addPost(parent, { Post, Auth } = {}){
        const auth = new Authentication(Auth);
        await auth.validate();
        const exist = await new PostsModel().posts.findOne({ Title: Post.Title }).lean().exec();
        if(exist) {
            throw new Error('Post with same title already exist');
        }
        Post.PostedBy = auth.getUserId();
        const post = new PostsModel().posts(Post);
        await post.save();
        return { Status: true };
    }

    static async updatePost(parent, { PostId, Post, Auth } = {}) {
        const auth = new Authentication(Auth);
        await auth.validate();
        const post = await new PostsModel().posts.findById(PostId);
        if(!post) {
            throw new Error('Post not found');
        }
        if(post.PostedBy !== auth.userId) {
            throw new Error('Authorization Error');
        }
        const exist = await new PostsModel().posts.findOne({ Title: Post.Title }).lean().exec();
        if(exist && exist._id.toString() !== post._id.toString()) {
            throw new Error('Title already exist');
        }
        post.Title = Post.Title;
        post.Body = Post.Body;
        post.UpdatedAt = Date.now();
        await post.save();
        return { Status: true };
    }

    static async deletePost(parent, { PostId, Auth } = {}) {
        const auth = new Authentication(Auth);
        await auth.validate();
        const post = await new PostsModel().posts.findById(PostId);
        if(!post) {
            throw new Error('Post not found');
        }
        if(post.PostedBy !== auth.userId) {
            throw new Error('Authorization Error');
        }
        await post.remove();
        await new CommentModel().comments.deleteMany({ PostId: PostId }).lean().exec();
        return { Status: true };
    }
}

const postLoader = new DataLoader(postIds => myBatchPosts(postIds));
async function myBatchPosts(postIds){
    const posts = await new PostsModel().posts.find({ $in: postIds }).lean().exec();
    return posts.map(post => ({ ...post, Id: post._id }));
}

module.exports  = PostResolver;
