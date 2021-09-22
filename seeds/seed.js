const sequelize = require("../config/connection");
const { User, Trip, Reservations } = require("../models");

const userSeedData = require("./userSeedData.json");
const tripSeedData = require("./tripSeedData.json");
const reservationsSeedData = require("./reservationsSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });

    for (const trip of tripSeedData) {
        await Trip.create({
            ...trip,
            //attach a random user ID to each trip
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    await Reservations.bulkCreate(reservationsSeedData);

    process.exit(0);
};

seedDatabase();