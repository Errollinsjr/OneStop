const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/Login');
    } else {
        next();
    }
};

module.exports = withAuth;