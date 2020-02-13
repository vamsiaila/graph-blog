const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class UsersModel {
    constructor() {
        try{
            this.users = mongoose.model('User');
        } catch {
            this.__userSchema = new Schema({
                Name: { type: String, default: null },
                Email: { type: String, default: null },
                Phone: { type: Number, default: null },
                DOB: { type: String, default: null },
                Password: { type: String, require: true },
                CreatedAt: { type: Number, default: Date.now() },
                UpdatedAt: { type: Number, default: Date.now() }
            });
            this.users = mongoose.model('User', this.__userSchema);
        }
    }
}

module.exports = UsersModel;
