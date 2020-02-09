const CommentResolver = require('./comment.resolver');
const CommentType = require('./types/comment.type');
const CommentInput = require('./types/comment.input');
const { GraphQLString } = require('graphql');

module.exports = {
    AddComment: {
        type: CommentType,
        args: { Comment: { type: CommentInput } },
        description: 'Add Comment For Post',
        resolve: CommentResolver.addComment
    },
    UpdateComment: {
        type: CommentType,
        args: { CommentId: { type: GraphQLString }, Comment: { type: CommentInput } },
        description: 'Update Comment',
        resolve: CommentResolver.updateComment
    },
    DeleteComment: {
        type: CommentType,
        args: { CommentId: { type: GraphQLString } },
        description: 'Delete Post',
        resolve: CommentResolver.deleteComment
    }
};
