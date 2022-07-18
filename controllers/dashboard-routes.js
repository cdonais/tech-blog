const router = require('express').Router();
const sequelize = require ('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../util/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        include: [Post, User, Comment]
    })
    .then(dbPostData => {
        const posts =dbPostData.map(post => post.get({ plain: true }))
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;