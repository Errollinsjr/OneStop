const User = require('./User');
const Trip = require('./Trip');
const Reservations = require('./Reservations');


User.hasMany(Trip, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Trip.belongsTo(User, {
    foreignKey: 'trip_id'
})

User.hasMany(Reservations, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Reservations.belongsTo(User, {
    foreignKey: 'reservations_id'
})

Trip.hasMany(Reservations, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
})

Reservations.belongsTo(Trip,{
    foreignKey: 'reservations_id'
})
