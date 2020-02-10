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
        Post: {
            type: PostType,
            resolve: PostResolver.getPost
        },
        CreatedAt: { type: GraphQLFloat },
        UpdatedAt: { type: GraphQLFloat }
    })
});
