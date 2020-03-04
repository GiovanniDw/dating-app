const passport = require("passport");
const User = require("../models/User");

let authController = {};

authController.isLoggedIn = async function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
};
// Restrict access to root page
authController.home = function (req, res) {
    if (req.user) {
        res.render('pages/index', {
            user: req.user,
            users: users
        });
    } else {
        res.redirect('/login');
    }
    console.log(users);
};

// Go to registration page
authController.register = function (req, res) {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render('pages/register');
    }
};

// Post registration
authController.doRegister = async (req, res, next) => {
    User.register(new User({
        username: req.body.username,
        games: []
    }), req.body.password, function (err, user) {
        if (err) {
            next(err);
            return res.render('pages/register', {
                user: user
            });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/onboarding');
        })
    })
};

// Go to login page
authController.login = function (req, res) {
    res.render('pages/login');
};
// Post login
authController.doLogin = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
});

// logout
authController.logout = function (req, res) {
    req.logout();
    res.redirect('/login');
};

module.exports = authController;