// create databse tatble here for user
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';
export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: true,
});
// Sync the model with the database
// User.sync({ alter: true })
//     .then(() => {
//         console.log('User table synced successfully.');
//     })
//     .catch((error) => {
//         console.error('Error syncing User table:', error);
//     });  