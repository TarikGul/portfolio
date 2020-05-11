const mongoose = require('mongoose');

const { Schema } = mongoose;

const BlogSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    ownderId: {
        type: Number
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