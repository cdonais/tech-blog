const router = require('express').Router();
const { User } = require('../../models');

//get /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//get /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
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
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        } 
        res.json({ user: dbUserData, message: 'You are now logged in!' });
    })
})
    //put /api/users/1
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
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