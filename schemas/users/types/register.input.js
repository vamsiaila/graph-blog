const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'Register',
    fields: () => ({
        Name: { type: GraphQLString },
        Email: { type: GraphQLString },
        Phone: { type: GraphQLFloat },
        DOB: { type: GraphQLString },
        Password: { type: GraphQLString }
    })
});
