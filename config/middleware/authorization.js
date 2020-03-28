/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function (req, res, next) {
	if (req.isAuthenticated()) {
		next();	
	} else {
		res.redirect('/login');
	}
};


/*
 *  User authorizations routing middleware
 */

exports.user = {
	hasAuthorization: function (req, res, next) {
		if (req.profile.id != req.user.id) {
			return res.redirect('/users/' + req.profile.id);
		}
		next();
	}
};
