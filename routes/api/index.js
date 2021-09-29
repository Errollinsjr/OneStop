const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const tripRoutes = require("./tripRoutes");
const reservationRoutes = require("./reservationRoutes");

router.use("/user", userRoutes);
router.use("/trip", tripRoutes);
router.use("/reservations", reservationRoutes);

module.exports = router;
