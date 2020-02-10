const UserType = require('../../users/types/user.type');
const UserResolver = require('../../users/user.resolver');
const CommentType = require('../../comments/types/comment.type');
const CommentResolver = require('../../comments/comment.resolver');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        Title: { type: GraphQLString },
        Body: { type: GraphQLString },
        PostedBy: {
            type: UserType,
            resolve: UserResolver.getProfile
        },
        Comments: {
            type: GraphQLList(CommentType),
            resolve: CommentResolver.getComments
        },
        CreatedAt: { type: GraphQLFloat },
        UpdatedAt: { type: GraphQLFloat }
    })
});
