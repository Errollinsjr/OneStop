const router = require("express").Router();
const { User } = require("../../models");

//login route
router.post('/login', async (req, res) => {
    try {
        res.status(200).json({message: 'test'});
        // //check if user exists in DB
        // const userData = await User.findOne({
        //     where: { email: req.body.email }
        // });
        // //if not found send error 409 - conflict
        // if (!userData) {
        //     res.status(409).json({ message: 'Incorrect email and/or password. Please try again.'})
        //     return;
        // }
        // //otherwise, check password
        // const validPassword = await userData.checkPassword(req.body.password);
        // //if password not valid send error - 409 conflict
        // if (!validPassword) {
        //     res.status(409).json({ message: 'Incorrect username or password, please try again.'})
        //     return;
        // }
        // res.status(200).json({ message: 'You are logged in.'});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;