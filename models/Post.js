const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post Model
class Post extends Model {}

// Create fields/columns for Post model
Post.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // Create reference to the User model
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // Title of post
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Text content of post
        content: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'post'
    }
);

module.exports = Post;