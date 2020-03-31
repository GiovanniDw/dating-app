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
	console.log(req.body.vote);
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

// exports.dislike = async (req, res, next) => {
// 	const id = req.params.id;
// 	const user = req.user.id;
// 	try {
// 		let checkDup = await gamesHelper.findGameId(id); //checks if the id of a game is in the database
// 		const game = await gamesHelper.findOne(id); // finds/creates game obj
// 		if (checkDup == false || checkDup == null) {
// 			//if the id is not in DB, save to db and to user.
// 			gamesHelper.save(game);
// 			profileHelper.addGame(user, id);
// 		} else {
// 			profileHelper.addGame(user, id);
// 		}

// 		res.redirect('/profile');
// 	} catch (err) {
// 		next(err);
// 	}
// };

// exports.match = async (req, res, next) => {
// 	const userID = req.user.id;
// 	let match = [];
// 	try {
// 		match = await matchHelper.show(userID);
// 		if (req.user) {
// 			res.render('pages/index', {
// 				title: 'Discover',
// 				user: req.user,
// 				users: match
// 			});
// 		} else {
// 			res.redirect('/login');
// 		}
// 	} catch (err) {
// 		next(err);
// 	}
// };


