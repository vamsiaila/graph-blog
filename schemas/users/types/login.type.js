const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Login',
    fields: () => ({
        AccessToken: { type: GraphQLString }
    })
});
