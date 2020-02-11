const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'Login',
    fields: () => ({
        Email: { type: GraphQLNonNull(GraphQLString) },
        Password: { type: GraphQLNonNull(GraphQLString) }
    })
});
