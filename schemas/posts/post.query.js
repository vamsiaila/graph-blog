const PostType = require('./types/post.type');
const PostResolver = require('./post.resolver');
const { GraphQLString, GraphQLList } = require('graphql');

module.exports = {
    Posts: {
        type: GraphQLList(PostType),
        args: { Poster: { type: GraphQLString } },
        description: 'Get Posts',
        resolve: PostResolver.getPosts
    },
    Post: {
        type: PostType,
        args: { PostId: { type: GraphQLString } },
        description: 'Get Post',
        resolve: PostResolver.getPost
    }
};
