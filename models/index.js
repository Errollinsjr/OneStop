const User = require('./User');
const Trip = require('./Trip');
const Reservations = require('./Reservations');


//User is able to create many trips
//Trips belong to the user
User.hasMany(Trip, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Trip.belongsTo(User, {
    foreignKey: 'user_id'
})


//A Trip has many reservations
//Reservations belong to the trip
Trip.hasMany(Reservations, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
})

Reservations.belongsTo(Trip,{
    foreignKey: 'trip_id'
})


//Not sure this relationship is needed
// User.hasMany(Reservations, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })

// Reservations.belongsTo(User, {
//     foreignKey: 'reservations_id'
// })

module.exports = { User, Trip, Reservations }