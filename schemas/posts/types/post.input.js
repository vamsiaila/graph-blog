const {
    GraphQLInputObjectType,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'AddPostInput',
    fields: () => ({
        Title: { type: GraphQLString },
        Body: { type: GraphQLString }
    })
});
