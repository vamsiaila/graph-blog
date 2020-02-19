const jwt = require('jsonwebtoken');

class Authentication {
    constructor(token) {
        this.tokenData = {};
        this.userId = '';
        this.token = token;
    }

    async validate() {
        this.tokenData = await jwt.verify(this.token, 'secret');
        if(!this.tokenData) {
            throw new Error('Invalid token');
        }
        this.userId = this.tokenData.UserId;
    }

    getUserId() {
        return this.tokenData.UserId;
    }
}

module.exports = Authentication;
