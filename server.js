const https = require('https');
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

const options = {
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
};

const server = https.createServer(options, app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port, () => {
	console.log(`Server is running on port 8080`);
});