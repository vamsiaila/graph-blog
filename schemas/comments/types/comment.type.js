const UserType = require('../../users/types/user.type');
const UserResolver = require('../../users/user.resolver');
const PostType = require('../../posts/types/post.type');
const PostResolver = require('../../posts/post.resolver');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        Comment: { type: GraphQLString },
        CommentedBy: {
            type: UserType,
            resolve: UserResolver.getProfile
        },
        CreatedAt: { type: GraphQLFloat },
        UpdatedAt: { type: GraphQLFloat }
    })
});
