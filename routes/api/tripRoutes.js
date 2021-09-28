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

//GET user trip by trip_id
router.get('/:trip_id', async(req, res) => {
    try {
        //get trip by id
        const tripDetails = await Trip.findOne({
            where: {id: req.params.trip_id},
        });
        res.status(200).json(tripDetails);
    } catch (err) {
        res.status(200).json(err);
    }
});

//POST create user trip
router.post('/createtrip', async(req, res) => {
    try {
        //create new trip
        const newTrip = await Trip.create({
            trip_name: req.body.trip_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            tags: req.body.tags,
            upload: req.body.upload,
            user_id: req.session.user_id
        })
        console.log(newTrip);
        res.status(200).json({ message: 'Trip created.', data: newTrip })
    } catch (err) {
        res.status(400).json({ error: err })
    };
});

//PUT (edit) user trip
router.put('/edit/:trip_id', async(req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)
        //call update method on trip model
        const editedTrip = await Trip.update(
            {
                trip_name: req.body.trip_name,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                tags: req.body.tags,
                upload: req.body.upload,
            },
            {
                //get trip based on id in request parameter
                where: {
                    id: req.params.trip_id
                },
            }
        )
        res.status(200).json(editedTrip);
    } catch (err) {
        res.status(400).json({ error: err })
    }
})

//DELETE user trip
router.delete('/delete/:trip_id', async (req, res) => {
    try {
        //look for trip id given in request param
        const deletedTrip = await Trip.destroy({
            where: {
                id: req.params.trip_id,
            },
        });

        res.status(200).json(deletedTrip)
    } catch (err) {
        res.status(400).json({ error: err })
    }


})

module.exports = router;