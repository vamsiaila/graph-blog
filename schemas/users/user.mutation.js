const UserResolver = require('./user.resolver');
const UserType = require('./types/user.type');
const RegisterInput = require('./types/register.input');

module.exports = {
    Register: {
        type: UserType,
        args: { Register: { type: RegisterInput } },
        resolve: UserResolver.register
    }
};
