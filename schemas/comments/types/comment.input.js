const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLInputObjectType({
    name: 'AddComment',
    fields: () => ({
        Comment: { type: GraphQLNonNull(GraphQLString) },
        PostId: { type: GraphQLNonNull(GraphQLString) }
    })
});
