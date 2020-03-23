const session = require('express-session');
const cookieparser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const db = require('./app/models');

module.exports = (app) => {
	// these two middlewares are required to make passport work with sessions
	// sessions are optional, but an easy solution to keeping users
	// logged in until they log out.
	app.use(cookieparser());
	app.use(session({
		// this should be changed to something cryptographically secure for production
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		// automatically extends the session age on each request. useful if you want
		// the user's activity to extend their session. If you want an absolute session
		// expiration, set to false
		rolling: true,
		name: 'sid', // don't use the default session cookie name
		// set your options for the session cookie
		cookie: {
			httpOnly: true,
			// the duration in milliseconds that the cookie is valid
			maxAge: 20 * 60 * 1000, // 20 minutes
			// recommended you use this setting in production if you have a well-known domain you want to restrict the cookies to.
			// domain: 'party-finderr.herokuapp.com',
			// recommended you use this setting in production if your site is published using HTTPS
			// secure: true,
		}
	}));
	app.use(flash());
	passport.serializeUser((user, done) => {
		done(null, user._id);
	});
	passport.deserializeUser(function (userId, done) {
		db.User.findById(userId)
			.then(function (user) {
				done(null, user);
			})
			.catch(function (err) {
				done(err);
			});
	});
	passport.use(new LocalStrategy((username, password, done) => {
		const errorMsg = 'Invalid username or password';
		db.User.findOne({
			username: username
		})
			.then(user => {
				// if no matching user was found...
				if (!user) {
					return done(null, false, {
						message: errorMsg
					});
				}
				// call our validate method, which will call done with the user if the
				// passwords match, or false if they don't
				return user.validatePassword(password)
					.then(isMatch => done(null, isMatch ? user : false, isMatch ? null : {
						message: errorMsg
					}));
			})
			.catch(done);
	}));
	// initialize passport. this is required, after you set up passport but BEFORE you use passport.session (if using)
	app.use(passport.initialize());
	// only required if using sessions. this will add middleware from passport
	// that will serialize/deserialize the user from the session cookie and add
	// them to req.user
	app.use(passport.session());
};
