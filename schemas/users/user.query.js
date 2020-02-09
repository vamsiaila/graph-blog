const UserType = require('./types/user.type');
const { GraphQLString } = require('graphql');
const UserResolver = require('./user.resolver');

module.exports = {
  User: {
      type: UserType,
      args: { Email: { type: GraphQLString }, Id: { type: GraphQLString } },
      description: 'Get Profile',
      resolve: UserResolver.getProfile
  }
};
