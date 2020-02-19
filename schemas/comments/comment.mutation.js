const CommentResolver = require('./comment.resolver');
const StatusType = require('../../shared/types/status.type');
const CommentInput = require('./types/comment.input');
const { GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = {
    AddComment: {
        type: StatusType,
        args: { Comment: { type: GraphQLNonNull(CommentInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Add Comment For Post',
        resolve: CommentResolver.addComment
    },
    UpdateComment: {
        type: StatusType,
        args: { CommentId: { type: GraphQLNonNull(GraphQLString) }, Comment: { type: GraphQLNonNull(CommentInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Update Comment',
        resolve: CommentResolver.updateComment
    },
    DeleteComment: {
        type: StatusType,
        args: { CommentId: { type: GraphQLNonNull(GraphQLString) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Delete Post',
        resolve: CommentResolver.deleteComment
    }
};
