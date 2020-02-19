const CommentResolver = require('./comment.resolver');
const CommentType = require('./types/comment.type');
const { GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');

module.exports = {
    Comments: {
        type: GraphQLList(CommentType),
        args: { PostId: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Get Comments For Post',
        resolve: CommentResolver.getComments
    },
    Comment: {
        type: CommentType,
        args: { CommentId: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Get Single Comment',
        resolve: CommentResolver.getComment
    }
};
