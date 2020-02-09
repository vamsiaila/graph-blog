const {
    GraphQLInputObjectType,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'AddComment',
    fields: () => ({
        Comment: { type: GraphQLString },
        PostId: { type: GraphQLString }
    })
});
