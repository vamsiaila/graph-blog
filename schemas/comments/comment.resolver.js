const CommentModel = require('../../models/comments.model');
const Authentication = require('../../shared/authentication');

class CommentResolver {
    static async getComments({ _id: Id }, { PostId, Auth }) {
        if(Auth !== undefined) {
            await new Authentication(Auth).validate();
        }
        const comments = await new CommentModel().comments.find({ PostId: Id || PostId }).lean().exec();
        return comments.map(comment => ({ ...comment, Id: comment._id }));
    }
    static async getComment(parent, { CommentId, Auth }) {
        if(Auth !== undefined) {
            await new Authentication(Auth).validate();
        }
        const comment = await new CommentModel().comments.findById(CommentId).lean().exec();
        comment.Id = comment._id;
        return comment;
    }
    static async addComment(parent, { Comment, Auth }) {
        const auth = new Authentication(Auth);
        await auth.validate();
        Comment.CommentedBy = auth.userId;
        await new CommentModel().comments(Comment).save();
        return { Status: true };
    }
    static async updateComment(parent, { CommentId, Comment, Auth }) {
        const auth = new Authentication(Auth);
        await auth.validate();
        const comment = await new CommentModel().comments.findById(CommentId);
        if(comment.CommentedBy !== auth.userId) {
            throw new Error('Authorization Error');
        }
        comment.Comment = Comment.Comment;
        comment.UpdatedAt = Date.now();
        await comment.save();
        return { Status: true };
    }
    static async deleteComment(parent, { CommentId, Auth }) {
        const auth = new Authentication(Auth);
        await auth.validate();
        const comment = await new CommentModel().comments.findById(CommentId);
        if(comment.CommentedBy !== auth.userId) {
            throw new Error('Authorization Error');
        }
        await comment.remove();
        return { Status: true }
    }
}

module.exports = CommentResolver;
