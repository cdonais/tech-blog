const router = require('express').Router();
const { Post, User, Comment } = require('../models');
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
          'id',
          'title',
          'content',
          'created_at',
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
          // pass a single post object into the homepage template
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('homepage', {posts});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
    router.get('/login', (req, res) => {
  
        res.render('login');
    })

    router.get('/sign-up', (req, res) => {
 
      res.render('sign-up');
    });
module.exports = router;