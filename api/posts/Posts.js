/**
 * POST MODEL
 * id: id
 * title: post title
 * body: post content
 */

const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    body: String
});

mongoose.model('Posts', PostsSchema);
module.exports = mongoose.model('Posts');