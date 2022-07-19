const router = require('express').Router();
const { User } = require('../models');

//get /api/users
router.get('/', (req, res) => {
    User.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//get /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
        return res.json(dbUserData);
})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//post /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//put /api/users/1
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
     .then(dbUserData => {
        return res.json(dbUserData);
     })
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });   
});

module.exports = router;