const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'AddPostInput',
    fields: () => ({
        Title: { type: GraphQLNonNull(GraphQLString) },
        Body: { type: GraphQLNonNull(GraphQLString) }
    })
});
