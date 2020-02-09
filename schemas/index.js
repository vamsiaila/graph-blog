const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const User = require('./users');
const Post = require('./posts');
const Comment = require('./comments');

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
    fields: {
        ...User.query,
        ...Post.query,
        ...Comment.query
    }
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        ...User.mutation,
        ...Post.mutation,
        ...Comment.mutation
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
