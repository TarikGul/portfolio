const mongoose = require('mongoose');

const { Schema } = mongoose;

const BlogSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    locationURL: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;