const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const Posts = require('./Posts');

router.get('/', (req, res) => {
    //PAGE AND LIMIT
    const defaultLimit = 15;
    const defaultPage = 1;

    const hasPageRequest = req.query.hasOwnProperty('page');
    const hasLimitRequest = req.query.hasOwnProperty('limit');

    let page = hasPageRequest ? req.query.page : defaultPage;
    let limit = hasLimitRequest ? req.query.limit : defaultLimit;
    page = Number(page);
    limit = Number(limit);

    //CALCULATING OFFSET
    let skip = 0;
    if (page > 1) {
        skip = limit * (page - 1);
    }

    //HIDING UNNECESARY FIELDS
    const postsProjection = {
        _id: false,
        body: false
    };

    //QUERY 
    Posts.find({}, postsProjection).skip(skip).limit(limit).then(collection => {
        let ret = {
            collection: collection,
            page: page,
            limit: limit,
            count: 0
        }

        Posts.countDocuments().then(count => {
            ret.count = count;
            res.status(200).json(ret);
        });
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;