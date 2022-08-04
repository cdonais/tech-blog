const  Comment = require('../models/Comment');

const commentData = [
    {
        comment_text: "This is a good post",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is a bad post",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "I like it",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Cool",
        user_id: 4,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;