const UserResolver = require('../../users/user.resolver');
const CommentResolver = require('../../comments/comment.resolver');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Post',
    fields: () =>{
        const userType = require('../../users/types/user.type');
        const CommentType = require('../../comments/types/comment.type');
        return {
            Id: { type: GraphQLString },
            Title: { type: GraphQLString },
            Body: { type: GraphQLString },
            PostedBy: {
                type: userType,
                resolve: UserResolver.loadUser
            },
            Comments: {
                type: GraphQLList(CommentType),
                resolve: CommentResolver.loadComments
            },
            CreatedAt: { type: GraphQLFloat },
            UpdatedAt: { type: GraphQLFloat }
            }
        }
});
