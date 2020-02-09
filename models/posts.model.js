const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class PostsModel {
    constructor() {
        try{
            this.posts = mongoose.model('Post');
        } catch {
            this.__postSchema = new Schema({
                Title: { type: String },
                Body: { type: String },
                PostedBy: { type: String },
                CreatedAt: { type: Number, default: Date.now() },
                UpdatedAt: { type: Number, default: Date.now() }
            });
            this.posts = mongoose.model('Post', this.__postSchema);
        }
    }
}

module.exports = PostsModel;
