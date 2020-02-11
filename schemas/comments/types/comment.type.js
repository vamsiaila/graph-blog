const UserResolver = require('../../users/user.resolver');
const PostResolver = require('../../posts/post.resolver');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Comment',
    fields: () => {
        const UserType = require('../../users/types/user.type');
        const PostType = require('../../posts/types/post.type');
        return {
            Comment: { type: GraphQLString },
            CommentedBy: {
                type: UserType,
                resolve: UserResolver.getProfile
            },
            CommentedFor: {
                type: PostType,
                resolve: PostResolver.getPost
            },
            CreatedAt: { type: GraphQLFloat },
            UpdatedAt: { type: GraphQLFloat }
        }
    }
});
