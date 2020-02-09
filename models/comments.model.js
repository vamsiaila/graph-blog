const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class  CommentsModel{
    constructor() {
        try{
            this.comments = mongoose.model('Comment');
        } catch {
            this.__commentSchema = new Schema({
                Comment: { type: String },
                PostId: { type: String },
                CommentedBy: { type: String },
                CreatedAt: { type: Number, default: Date.now() },
                UpdatedAt: { type: Number, default: Date.now() }
            });
            this.comments = mongoose.model('Comment', this.__commentSchema);
        }
    }
}

module.exports = CommentsModel;
