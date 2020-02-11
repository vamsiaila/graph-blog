const UserResolver = require('./user.resolver');
const UserType = require('./types/user.type');
const RegisterInput = require('./types/register.input');
const LoginInput = require('./types/login.input');

module.exports = {
    Register: {
        type: UserType,
        args: { Register: { type: RegisterInput } },
        description: 'Register User',
        resolve: UserResolver.register
    },
    Login: {
        type: UserType,
        args: { Credentials: { type: LoginInput } },
        description: 'Login User',
        resolve: UserResolver.login
    }
};
