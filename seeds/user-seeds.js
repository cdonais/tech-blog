const User = require('../models/User');

const userData=[
    {
        username: 'techgirl',
        password: 'girlcode'
    },
    {
        username: 'user2',
        password: 'secretpass'
    },
    {
        username: 'luv2code',
        password: 'passpass'
    },
    {
        username: 'cooluser',
        password: 'mypassword'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;