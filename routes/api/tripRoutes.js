const router = require("express").Router();
const { User, Trip } = require("../../models");
const withAuth = require("../../utils/auth.js");

//GET all user trips
router.get('/usertrips', withAuth, async(req, res) => {
    try {
        //get user details
        const userDetails = await User.findOne({
            where: {id: req.session.user_id},
            attributes: {exclude: ['password']},
            include: [
                {
                    model: Trip
                }
            ]
        });
        console.log(userDetails);
        res.status(200).json(userDetails);
    } catch (err) {
        res.status(400).json(err);
    }
});

//POST create user trip
router.post('/createtrip', async(req, res) => {
    try {
        //create new trip
        await Trip.create({
            trip_name: req.body.trip_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            tags: req.body.tags,
            upload: req.body.upload,
            user_id: req.session.user_id
        })
        res.status(200).json({ message: 'Trip created.'})
    } catch (err) {
        res.status(400).json({ error: err })
    };
});

module.exports = router;