const db = require('../models');
const passport = require('passport');

// Go to registration page
exports.register = (req, res) => {
	if (req.user) {
		res.redirect('/');
	} else {
		res.render('pages/register', {
			flash: req.flash('error')
		});
	}
};
// Post registration
exports.doRegister = async (req, res, next) => {
	let newUser = new db.User(req.body);
	newUser.provider = 'local';
	db.User
		.findOne({
			username: newUser.username
		})
		.exec(function (err, user) {
			if (err) return next(err);
			if (!user) {
				newUser.save(function (err) {
					if (err) {
						return res.render('users/signup', {
							errors: req.flash,
							user: newUser
						});
					}
					req.logIn(newUser, function (err) {
						if (err) return next(err);
						return res.redirect('profile/onboarding');
					});
				});
			} else {
				return res.render('users/signup', {
					errors: [{
						'message': 'email already registered'
					}],
					user: newUser
				});
			}
		});
};

// Go to login page
exports.login = (req, res) => {
	res.render('pages/login', {
		flash: req.flash('error')
	});
};
// Post login
exports.doLogin = passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
});

// logout
exports.logout = (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/login');
};
