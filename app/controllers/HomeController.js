const db = require("../models");
const passport = require("passport");
let authController = {};

authController.isLoggedIn = async (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/login');
	}
};
// Restrict access to root page
authController.home = (req, res) => {
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
authController.register = (req, res) => {
	if (req.user) {
		res.redirect('/');
	} else {
		res.render('pages/register', {
			flash: req.flash('error')
		});
	}
};

// Post registration
authController.doRegister = (req, res, next) => {
	const user = new db.User(req.body);
	user.save(req.body)
		.then(req => {
			res.redirect('/onboarding');
		})
		.catch(err => {
			// if this error code is thrown, that means the username already exists.
			// let's handle that nicely by redirecting them back to the create screen
			// with that flash message
			if (err.code === 11000) {
				req.flash("error", "That username is already in use.");
				return res.redirect('/register');
			}

			// otherwise, it's some nasty unexpected error, so we'll just send it off to
			// to the next middleware to handle the error.
			next(err);
		});


};


// Go to login page
authController.login = (req, res) => {
	res.render('pages/login', {
		flash: req.flash('error')
	});
};
// Post login
authController.doLogin = passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
});

// logout
authController.logout = (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/login');
};

module.exports = authController;
