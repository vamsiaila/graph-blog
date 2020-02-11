const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'Register',
    fields: () => ({
        Name: { type: GraphQLNonNull(GraphQLString) },
        Email: { type: GraphQLNonNull(GraphQLString) },
        Phone: { type: GraphQLNonNull(GraphQLFloat) },
        DOB: { type: GraphQLNonNull(GraphQLString) },
        Password: { type: GraphQLNonNull(GraphQLString) }
    })
});
