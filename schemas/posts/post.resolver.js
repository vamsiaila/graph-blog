const PostsModel = require('../../models/posts.model');

class PostResolver {
    static async getPosts(parent, { PostedBy }) {
        const query = {};
        if(PostedBy) {
            query.PostedBy = PostedBy;
        }
        return await new PostsModel().posts.find(query).lean().exec();
    }

    static async getPost(parent, { PostId }) {
        const post = await new PostsModel().posts.findById(PostId).lean().exec();
        if(!post) {
            throw new Error('Post not found');
        }
        return post;
    }

    static async addPost(parent, { Post }) {
        const exist = await new PostsModel().posts.findOne({ Title: Post.title }).lean().exec();
        if(!exist) {
            throw new Error('Post with same title already exist');
        }
        const post = new PostsModel().posts(Post);
        await post.save();
        return post;
    }

    static async updatePost(parent, { PostId, Post }) {
        const post = await new PostsModel().posts.findById(PostId);
        if(!post) {
            throw new Error('Post not found');
        }
        const exist = await new PostsModel().posts.findOne({ Title: Post.title }).lean().exec();
        if(exist._id !== post._id) {
            throw new Error('Title already exist');
        }
        post.Title = Post.Title;
        post.Body = Post.Body;
        post.UpdatedAt = Date.now();
        await post.save();
        return post;
    }

    static async deletePost(parent, { PostId }) {
        await new PostsModel().posts.findByIdAndRemove(PostId).lean().exec();
        return {};
    }
}

module.exports  = PostResolver;
