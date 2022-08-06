const User = require('../models/User');
const bcrypt = require('bcrypt');

const userData=[
    {
        username: 'techgirl',
        password: bcrypt.hashSync("password",10)     
    },
    {
        username: 'user2',
        password: bcrypt.hashSync('secretpass',10)
    },
    {
        username: 'luv2code',
        password: bcrypt.hashSync('passpass',10)
    },
    {
        username: 'cooluser',
        password: bcrypt.hashSync('mypassword',10)
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;