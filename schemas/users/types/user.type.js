const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        Name: { type: GraphQLString },
        Email: { type: GraphQLString },
        Phone: { type: GraphQLFloat },
        DOB: { type: GraphQLString },
        CreatedAt: { type: GraphQLFloat },
        UpdatedAt: { type: GraphQLFloat }
    })
});
