const router = require('express').Router();
const sequelize = require ('../../config/connection');
const { Post, User, Comment } = require('../../models');
// const withAuth = require('../util/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'created_at'],
            include: [{
                model: User,
                attributes: ['username']
            }]
        },
            {
                model: User,
                attributes: ['username']
            
        }]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(JSON.stringify(posts, null, 2))
        res.render('dashboard', { posts });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});        
module.exports = router;