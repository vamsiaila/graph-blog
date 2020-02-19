const {
    GraphQLObjectType,
    GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
            Status: { type: GraphQLBoolean }
        })
});
