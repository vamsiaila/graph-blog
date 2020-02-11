const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'Login',
    fields: () => ({
        Email: { type: GraphQLString },
        Password: { type: GraphQLString }
    })
});
