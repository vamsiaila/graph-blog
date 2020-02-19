const PostsModel = require('../../models/posts.model');
const CommentModel = require('../../models/comments.model');
const Authentication = require('../../shared/authentication');

class PostResolver {
    static async getPosts({ _id: UserId } = {}, { PostedBy, Auth } = {}) {
        if(Auth !== undefined) {
            await new Authentication(Auth).validate();
        }
        const posts = await new PostsModel().posts.find({ PostedBy: UserId || PostedBy }).lean().exec();
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

    static async addPost(parent, { Post, Auth } = {}){
        const auth = new Authentication(Auth);
        await auth.validate();
        const exist = await new PostsModel().posts.findOne({ Title: Post.title }).lean().exec();
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
        const exist = await new PostsModel().posts.findOne({ Title: Post.title }).lean().exec();
        if(exist._id !== post._id) {
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

module.exports  = PostResolver;
