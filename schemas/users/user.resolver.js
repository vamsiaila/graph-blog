const UserModel = require('../../models/users.model');
const jwt = require('jsonwebtoken');

class UserResolver {
    static async getProfile(parent, {Email}, request) {
        console.info(parent);
        const query = {};
        if (Email) {
            query.Email = Email;
        }
        // if (Id) {
        //     query._id = Id;
        // }
        const User = await new UserModel().users.findOne(query, {Password: 0, _id: 0}).lean().exec();
        if (!User) {
            throw new Error('User not exist');
        }
        return User;
    }

    static async register(parent, { UserData }) {
            const exist = await new UserModel().users.findOne({ $or: [{ Email: UserData.Email }, { Phone: UserData.Phone }] }).lean().exec();
            if(exist) {
                throw new Error('Email or Phone already exist')
            }
            await new UserModel().users(UserData).save();
            return UserData;
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
