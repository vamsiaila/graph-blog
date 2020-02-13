const UserResolver = require('./user.resolver');
const UserType = require('./types/user.type');
const RegisterInput = require('./types/register.input');
const LoginInput = require('./types/login.input');
const { GraphQLNonNull } = require('graphql');

module.exports = {
    Register: {
        type: UserType,
        args: { UserData: { type: GraphQLNonNull(RegisterInput) } },
        description: 'Register User',
        resolve: UserResolver.register
    },
    Login: {
        type: UserType,
        args: { Credentials: { type: GraphQLNonNull(LoginInput) } },
        description: 'Login User',
        resolve: UserResolver.login
    }
};
