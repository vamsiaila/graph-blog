const PostType = require('./types/post.type');
const PostResolver = require('./post.resolver');
const { GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');

module.exports = {
    Posts: {
        type: GraphQLList(PostType),
        args: { PostedBy: { type: GraphQLString, description: 'UserId' }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Get Posts',
        resolve: PostResolver.getPosts
    },
    Post: {
        type: PostType,
        args: { PostId: { type: GraphQLNonNull(GraphQLString), description: 'PostId' }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        description: 'Get Post',
        resolve: PostResolver.getPost
    }
};
