const CommentModel = require('../../models/comments.model');

class CommentResolver {
    static async getComments(parent, { PostId }, request) {
        return await new CommentModel().comments.find({ PostId }).lean().exec();
    }
    static async getComment(parent, { CommentId }, request) {
        return await new CommentModel().comments.findById(CommentId).lean().exec();
    }
    static async addComment(parent, { Comment }, request) {
        await new CommentModel().comments(Comment).save();
        return Comment;
    }
    static async updateComment(parent, { CommentId, Comment }, request) {
        await new CommentModel().comments.findOneAndUpdate(CommentId, Comment).lean().exec();
        return Comment;
    }
    static async deleteComment(parent, { CommentId }, request) {
        await new CommentModel().comments.findByIdAndRemove(CommentId).lean().exec();
        return { deleted: true }
    }
}

module.exports = CommentResolver;
