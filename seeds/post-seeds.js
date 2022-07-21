const Post = require('../models/Post');

const postData = [
    {
        title: 'This is a Blog Post',
        content: "fheifhtweitfteiwtjiewjfoiejfoewjiejij"
        
    },
    {
        title: 'Another Blog Post',
        content: "fkogjkogkrjogjrogjorgjroegjorgj"
    },
    {
        title: 'Also a Blog Post',
        content: "gkrlgjkeogjrogkjoregjk."
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;