const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        Comment: { type: GraphQLString },
        CreatedAt: { type: GraphQLFloat },
        UpdatedAt: { type: GraphQLFloat }
    })
});
