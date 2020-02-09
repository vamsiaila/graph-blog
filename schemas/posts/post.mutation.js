const PostType = require('./types/post.type');
const PostInput = require('./types/post.input');
const PostResolver = require('./post.resolver');
const { GraphQLString } = require('graphql');

module.exports = {
    AddPost: {
        type: PostType,
        description: 'Add Post',
        args: { Post: { type: PostInput } },
        resolve: PostResolver.addPost
    },
    UpdatePost: {
        type: PostType,
        description: 'Update Post',
        args: { PostId: { type: GraphQLString }, Post: { type: PostInput } },
        resolve: PostResolver.updatePost
    },
    DeletePost: {
        type: PostType,
        description: 'Delete Post',
        args: { PostId: { type: GraphQLString } },
        resolve: PostResolver.deletePost
    }
};
