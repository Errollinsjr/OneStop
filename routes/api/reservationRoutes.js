const router = require("express").Router();
const { Reservations, Trip } = require("../../models");
const withAuth = require("../../utils/auth.js");

router.get('/userreservations', withAuth, async(req, res) => {
    try {
        const tripDetails = await Trip.findOne({
            where: {id: req.session.trip_id},
            include: [
                {
                    model: Reservations
                }
            ]
        });
        console.log(tripDetails);
        res.status(200).json(tripDetails)

    }catch (err) {
        res.status(400).json(err);
    }
});

router.post('/createreservation', async(req, res) => {
    try {
        await Reservations.create({
            type: req.body.type,
            name: req.body.name,
            confirmation: req.body.confirmation,
            description: req.body.description,
            trip_id: req.session.trip_id
        })
        res.status(200).json({ message: 'Reservation created!'})
    }catch (err) {
        res.status(400).json({error: err })
    };
});

router.put ('/:tripd_id', async(req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)

        const editedReservation = await Reservations.update(
            {}
        )
    }
})


// //PUT (edit) user trip
// router.put('/:trip_id', async(req, res) => {
//     try {
//         console.log(req.body)
//         console.log(req.params.id)
//         //call update method on trip model
//         const editedTrip = await Trip.update(
//             {
//                 trip_name: req.body.trip_name,
//                 start_date: req.body.start_date,
//                 end_date: req.body.end_date,
//                 tags: req.body.tags,
//                 upload: req.body.upload,
//             },
//             {
//                 //get trip based on id in request parameter
//                 where: {
//                     id: req.params.trip_id
//                 },
//             }
//         )
//         res.status(200).json(editedTrip);
//     } catch (err) {
//         res.status(400).json({ error: err })
//     }
// })

// //DELETE user trip
// router.delete('/:trip_id', async (req, res) => {
//     try {
//         //look for trip id given in request param
//         const deletedTrip = await Trip.destroy({
//             where: {
//                 id: req.params.trip_id,
//             },
//         });

//         res.status(200).json(deletedTrip)
//     } catch (err) {
//         res.status(400).json({ error: err })
//     }


// })


module.exports = router