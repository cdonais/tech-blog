const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
// const withAuth = require('../util/auth');

router.get('/', (req, res) => {
    Post.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
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
        res.render('dashboard', { posts });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});      

router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
module.exports = router;