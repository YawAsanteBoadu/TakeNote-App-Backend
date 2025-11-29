// create note database table here
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';
export const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'notes',
    timestamps: true,
});
// Sync the model with the database
// Note.sync({ alter: true })
//     .then(() => {
//         console.log('Note table synced successfully.');
//     })
//     .catch((error) => {
//         console.error('Error syncing Note table:', error);
//     });