class UserResolver {
    static async getProfile(parent, args, request) {
        console.info(request.headers);
        throw new Error('all is well');
    }

    static async register(parent, args) {
        console.info(args);
    }
}

module.exports = UserResolver;
