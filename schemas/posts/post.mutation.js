const StatusType = require('../../shared/types/status.type');
const PostInput = require('./types/post.input');
const PostResolver = require('./post.resolver');
const { GraphQLString, GraphQLNonNull } = require('graphql');

module.exports = {
    AddPost: {
        type: StatusType,
        description: 'Add Post',
        args: { Post: { type: GraphQLNonNull(PostInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        resolve: PostResolver.addPost
    },
    UpdatePost: {
        type: StatusType,
        description: 'Update Post',
        args: { PostId: { type: GraphQLNonNull(GraphQLString) }, Post: { type: GraphQLNonNull(PostInput) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        resolve: PostResolver.updatePost
    },
    DeletePost: {
        type: StatusType,
        description: 'Delete Post',
        args: { PostId: { type: GraphQLNonNull(GraphQLString) }, Auth: { type: GraphQLNonNull(GraphQLString) } },
        resolve: PostResolver.deletePost
    }
};
