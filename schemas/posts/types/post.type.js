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
            Title: { type: GraphQLString },
            Body: { type: GraphQLString },
            PostedBy: {
                type: userType,
                resolve: UserResolver.getProfile
            },
            Comments: {
                type: GraphQLList(CommentType),
                resolve: CommentResolver.getComments
            },
            CreatedAt: { type: GraphQLFloat },
            UpdatedAt: { type: GraphQLFloat }
            }
        }
});
