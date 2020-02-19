const PostResolver = require('../../posts/post.resolver');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'User',
    fields: () => {
        const PostType = require('../../posts/types/post.type');
        return {
            Id: { type: GraphQLString },
            Name: { type: GraphQLString },
            Email: { type: GraphQLString },
            Phone: { type: GraphQLFloat },
            DOB: { type: GraphQLString },
            Posts: {
                type: GraphQLList(PostType),
                resolve: PostResolver.getPosts
            },
            CreatedAt: { type: GraphQLFloat },
            UpdatedAt: { type: GraphQLFloat }
        }
    }
});
