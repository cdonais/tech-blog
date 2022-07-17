const { Model, Datatypes } = require('sequelize');
const sequelize =require('../config/connection');

class Post extends Model {

}

Post.init(
    {
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        date_created: {
            type: Datatypes.DATE,
            allowNull: false
        },
        post_content: {
            type: Datatypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'    
    }

);

module.exports = Post;