const jwt = require('jsonwebtoken');

class Authentication {
    constructor(token) {
        this.tokenData = {};
        this.token = token;
    }

    async validate() {
        this.tokenData = await jwt.verify(this.token, 'secret');
        if(!this.tokenData) {
            throw 'Invalid token';
        }
    }

    getUserId() {
        return this.tokenData.UserId;
    }
}

module.exports = Authentication;
