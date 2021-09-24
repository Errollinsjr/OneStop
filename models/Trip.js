const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Trip model
class Trip extends Model {}

//create columns for Trip model
Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trip_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tags: {
            type: DataTypes.JSON,
            allowNull: true
        },
        upload: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
    }
);

module.exports = Trip;