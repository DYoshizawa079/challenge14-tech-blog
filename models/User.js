const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User Model
class User extends Model {}

// Create fields/columns for Post model
User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // User password
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'user'
    }
);

module.exports = User;