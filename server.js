const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./db');

const PostsController = require('./api/posts/PostsController');

app.use('/posts', PostsController);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);