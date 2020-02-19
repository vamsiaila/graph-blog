const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Authorization',
    fields: () => ({
        AccessToken: { type: GraphQLString }
    })
});
