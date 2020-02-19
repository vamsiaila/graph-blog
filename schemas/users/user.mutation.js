const UserResolver = require('./user.resolver');
const LoginType = require('./types/login.type');
const RegisterInput = require('./types/register.input');
const LoginInput = require('./types/login.input');
const { GraphQLNonNull } = require('graphql');

module.exports = {
    Register: {
        type: LoginType,
        args: { UserData: { type: GraphQLNonNull(RegisterInput) } },
        description: 'Register User',
        resolve: UserResolver.register
    },
    Login: {
        type: LoginType,
        args: { Credentials: { type: GraphQLNonNull(LoginInput) } },
        description: 'Login User',
        resolve: UserResolver.login
    }
};
