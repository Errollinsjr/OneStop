const router = require("express").Router();
const { Reservations, Trip } = require("../../models");

//Get all reservations by trip_id
router.get('/:trip_id', async(req, res) => {
    try {
        const tripDetails = await Trip.findOne({
            where: {id: req.params.trip_id},
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

//Get single reservation by trip_id and reservation_id
router.get('/:trip_id/:reservation_id', async(req, res) => {
    try {
        const resDetails = await Reservations.findOne({
            where: {trip_id: req.params.trip_id, 
                    id: req.params.reservation_id},
        })
        console.log(resDetails);
        res.status(200).json(resDetails)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/createreservation', async(req, res) => {
    try {
        await Reservations.create({
            type: req.body.type,
            name: req.body.name,
            confirmation: req.body.confirmation,
            description: req.body.description,
            trip_id: req.body.trip_id,
            
        })
        res.status(200).json({ message: 'Reservation created!'})
    }catch (err) {
        res.status(400).json({error: err })
    };
});

router.put('/edit/:reservations_id', async(req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)

        const editedReservation = await Reservations.update(
            {
            type: req.body.type,
            name: req.body.name,
            confirmation: req.body.confirmation,
            description: req.body.description,
            trip_id: req.session.trip_id
            }, 
            { where:
              {
                id: req.params.reservations_id
              }               
            },
        )
        res.status(200).json(editedReservation);
    } catch (err) {
        res.status(400).json({error: err})
    }
});

router.delete('/:reservations_id', async (req, res) => {
    try {
        const deletedReservation = await Reservations.destroy({
            where: {
                id: req.params.reservations_id,
            },
        });
        res.status(200).json(deletedReservation)
    } catch (err) {
        res.status(400).json({ error: err})
    }
})



module.exports = router