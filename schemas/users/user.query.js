const UserType = require('./types/user.type');
const { GraphQLString, GraphQLNonNull } = require('graphql');
const UserResolver = require('./user.resolver');

module.exports = {
  User: {
      type: UserType,
      args: { Email: { type: GraphQLNonNull(GraphQLString) } },
      description: 'Get Profile',
      resolve: UserResolver.getProfile
  }
};
