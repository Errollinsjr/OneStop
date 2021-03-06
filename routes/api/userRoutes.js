const router = require("express").Router();
const { User } = require("../../models");

//login route
router.post('/login', async (req, res) => {
    try {
        //check if user exists in DB
        const userData = await User.findOne({
            where: { email: req.body.email }
        });
        //if not found send error 409 - conflict
        if (!userData) {
            res.status(409).json({ message: 'Incorrect email and/or password. Please try again.'})
            return;
        }
        //otherwise, check password
        const validPassword = await userData.checkPassword(req.body.password);
        //if password not valid send error - 409 conflict
        if (!validPassword) {
            res.status(409).json({ message: 'Incorrect email and/or password, please try again.'})
            return;
        }
        //otherwise, save user details to session
            req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.name = userData.name;
            req.session.sessID = req.sessionID;

            

            res.status(200).json({message: 'Your are now logged in.', logged_in: req.session.logged_in, user_id: req.session.user_id, user_name:req.session.name });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//check user authorized route
router.post('/authorized', async (req, res) => {
    try {
        if (req.sessionID === req.session.sessID) {
            res.status(200).json({ message: 'User authorized.', authorized: true})
        } else {
            res.status(200).json({ message: 'User not authorized.', authorized: false})
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
})

//create user account
router.post('/signup', async (req, res) => {
    try {
        //check if user exists in DB
        const userData = await User.findOne({
            where: { email: req.body.email }
        });
        //if found, return error 409-conflict
        if (userData) {
            res.status(409).json({ message: 'Email address already associated with account.'})
            return;
        }
        const phoneNumber = await User.findOne({
            where: {phone: req.body.phone }
        })
        //if found, return error 409-conflict
        if(phoneNumber) {
            res.status(409).json({ message: 'Phone number already associated with account. Please provide a different number.'})
        }
        //otherwise create new user
        await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        })
        res.status(200).json({ message: 'User account created successfully. Please login.'})
    } catch (err) {
        res.status(400).json({error: err })
    };
});

//logout user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        res.status(200).clearCookie('connect.sid', {
            path:'/',
        })
        req.session.destroy(() => {
            res.status(200).json({message: "Logged out successfully.", logged_in: false}).end();
        });
    } else {
        res.status(404).end();
    };
});

module.exports = router;