const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//create User model
class User extends Model {
    //add checkPassword method
    checkPassword(password) {
        if(password !== null) {
            return bcrypt.compareSync(password, this.password);
        }
    }
}

//create fields/column for User model
User.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName:'user',
    }
);

module.exports = User;