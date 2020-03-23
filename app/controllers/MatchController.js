const matchHelper = require('../helpers/match');



exports.show = async (req, res, next) => {
	let users = [];
	try {
		users = await matchHelper.userInfo();
		if (req.user) {
			res.render('pages/index', {
				title: 'Discover',
				user: req.user,
				users: users
			});
		} else {
			res.redirect('/login');
		}
	} catch (err) {
		next(err);
	}
};
