const CommentResolver = require('./comment.resolver');
const CommentType = require('./types/comment.type');
const { GraphQLString, GraphQLList } = require('graphql');

module.exports = {
    Comments: {
        type: GraphQLList(CommentType),
        args: { PostId: { type: GraphQLString } },
        description: 'Get Comments For Post',
        resolve: CommentResolver.getComments
    },
    Comment: {
        type: CommentType,
        args: { CommentId: { type: GraphQLString } },
        description: 'Get Single Comment',
        resolve: CommentResolver.getComment
    }
};
