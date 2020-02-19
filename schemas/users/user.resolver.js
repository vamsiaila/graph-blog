const UserModel = require('../../models/users.model');
const Authentication = require('../../shared/authentication');
const jwt = require('jsonwebtoken');

class UserResolver {
    static async getProfile({ PostedBy, CommentedBy }, { UserId, Auth }) {
        if(Auth !== undefined) {
            const auth = new Authentication(Auth);
            await auth.validate();
        }
        const User = await new UserModel().users.findById(UserId || PostedBy || CommentedBy, {Password: 0 }).lean().exec();
        if (!User) {
            throw new Error('User not exist');
        }
        User.Id = User._id;
        return User;
    }

    static async register(parent, { UserData }) {
            const exist = await new UserModel().users.findOne({ $or: [{ Email: UserData.Email }, { Phone: UserData.Phone }] }).lean().exec();
            if(exist) {
                throw new Error('Email or Phone already exist')
            }
            let user = new UserModel().users(UserData);
            await user.save();
            return {
                AccessToken: jwt.sign({ UserId: user._id }, 'secret')
            };
    }

    static async login(parent,  { Credentials }) {
        const user = await new UserModel().users.findOne({ Email: Credentials.Email, Password: Credentials.Password }).lean().exec();
        if(!user) {
            throw new Error('Email or Password is invalid');
        }
        return {
            AccessToken: jwt.sign({ UserId: user._id }, 'secret')
        };
    }
}

module.exports = UserResolver;
