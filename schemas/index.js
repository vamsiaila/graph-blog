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
    },
    description: 'These are query schemas where you will get data'
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        ...User.mutation,
        ...Post.mutation,
        ...Comment.mutation
    },
    description: 'These are mutation schemas where you will create, update and delete data'
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
