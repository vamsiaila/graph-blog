const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        Title: { type: GraphQLString },
        Body: { type: GraphQLString },
        CreatedAt: { type: GraphQLFloat },
        UpdatedAt: { type: GraphQLFloat }
    })
});
