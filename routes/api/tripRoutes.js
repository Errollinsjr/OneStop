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

module.exports = router;