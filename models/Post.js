const { Model, DataTypes } = require('sequelize');
const sequelize =require('../config/connection');

class Post extends Model {

}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false
        },
        post_content: {
            type: DataTypes.STRING,
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