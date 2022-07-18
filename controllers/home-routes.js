const router = require('express').Router();
const { Post } = require('../models/Post');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Post.findAll({
        include: [ Post ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;