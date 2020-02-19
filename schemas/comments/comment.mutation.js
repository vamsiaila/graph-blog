const CommentResolver = require('./comment.resolver');
const CommentType = require('./types/comment.type');
const CommentInput = require('./types/comment.input');
const { GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = {
    AddComment: {
        type: CommentType,
        args: { Comment: { type: GraphQLNonNull(CommentInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Add Comment For Post',
        resolve: CommentResolver.addComment
    },
    UpdateComment: {
        type: CommentType,
        args: { CommentId: { type: GraphQLNonNull(GraphQLString) }, Comment: { type: GraphQLNonNull(CommentInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Update Comment',
        resolve: CommentResolver.updateComment
    },
    DeleteComment: {
        type: CommentType,
        args: { CommentId: { type: GraphQLNonNull(GraphQLString) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Delete Post',
        resolve: CommentResolver.deleteComment
    }
};
