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
            Id: { type: GraphQLString },
            Comment: { type: GraphQLString },
            CommentedBy: {
                type: UserType,
                resolve: UserResolver.loadUser
            },
            CommentedFor: {
                type: PostType,
                resolve: PostResolver.loadPost
            },
            CreatedAt: { type: GraphQLFloat },
            UpdatedAt: { type: GraphQLFloat }
        }
    }
});
