const matchHelper = require('../helpers/match');

exports.users = async (req, res, next) => {
	const thisUser = req.user;
	let users = [];
	
	try {
		users = await matchHelper.users(thisUser);
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
exports.vote = async (req, res, next) => {
	const id = req.params.id;
	const user = req.user.id;
	let vote = req.body.vote;
	try {
		if (vote == 'like') {
			await matchHelper.like(user, id);
		}
		if (vote == 'dislike') {
			await matchHelper.dislike(user, id);
		}
		res.redirect('/');
	} catch (err) {
		next(err);
	}
};