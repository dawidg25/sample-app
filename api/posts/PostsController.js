const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const Posts = require('./Posts');

router.get('/', (req, res) => {
    const postsProjection = {
        _id: false,
        body: false
    };

    Posts.find({}, postsProjection).then(collection => {
        let ret = {
            status: 200,
            collection: collection
        }
        res.status(200).json(ret);
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;