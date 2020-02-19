const PostType = require('./types/post.type');
const PostInput = require('./types/post.input');
const PostResolver = require('./post.resolver');
const { GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = {
    AddPost: {
        type: PostType,
        description: 'Add Post',
        args: { Post: { type: GraphQLNonNull(PostInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        resolve: PostResolver.addPost
    },
    UpdatePost: {
        type: PostType,
        description: 'Update Post',
        args: { PostId: { type: GraphQLNonNull(GraphQLString) }, Post: { type: GraphQLNonNull(PostInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        resolve: PostResolver.updatePost
    },
    DeletePost: {
        type: PostType,
        description: 'Delete Post',
        args: { PostId: { type: GraphQLNonNull(GraphQLString) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        resolve: PostResolver.deletePost
    }
};
