const { Post } = require('../models/Post');

const postData = [
    {
        title: 'This is a Blog Post',
        date_created: '2022-07-16',
        content: "These are Fallout Boy lyrics: When I wake up, I'm willing to take my chances on the hope I forget that you hate him more than you notice I wrote this for you, for you, so. You need him, I could be him, I could be an accident but I'm still tryin' and that's more than I can say for him"
        
    },
    {
        title: 'Another Blog Post',
        date_created: '2022-07-16',
        content: "Great moments are born from great opportunity. And that's what you have here tonight, boys. That's what you've earned here tonight. One game. If we played 'em ten times, they might win nine. But not this game. Not tonight. Tonight, we skate with them. Tonight, we stay with them. And we shut them down because we can! Tonight, WE are the greatest hockey team in the world. You were born to be hockey players. Every one of you. And you were meant to be here tonight. This is your time. Their time is done. It's over. I'm sick and tired of hearing about what a great hockey team the Soviets have. Screw 'em. This is your time. Now go out there and take it."
    },
    {
        title: 'Also a Blog Post',
        date_created: '2022-07-16',
        content: "Sigh no more, ladies, sigh no more. Men were deceivers ever, one foot in sea, and one on shore, to one thing constant never. Then sigh not so, but let them go, and be you blithe and bonny, converting all your sounds of woe into hey nonny, nonny."
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;