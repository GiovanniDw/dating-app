const db = require('../models');
const profileHelper = require('../helpers/profile');

let platformData = [{
	name: 'Computer',
	value: 'computer'
}, {
	name: 'Mobile',
	value: 'mobile'
}, {
	name: 'Xbox',
	value: 'xbox'
}, {
	name: 'Playstation',
	value: 'playstation'
}, {
	name: 'Switch',
	value: 'switch'
}, {
	name: 'Wii',
	value: 'wii'
}];


let genreData = [{
	name: 'Action',
	value: 'action'
}, {
	name: 'Adventure',
	value: 'adventure'
}, {
	name: 'Casual',
	value: 'casual'
}, {
	name: 'Fighting',
	value: 'fighting'
}, {
	name: 'Party',
	value: 'party'
}, {
	name: 'RPG',
	value: 'rpg'
}, {
	name: 'Sports',
	value: 'sports'
}, {
	name: 'Strategy',
	value: 'strategy'
}];

exports.onboarding = (req, res) => {
	res.render('pages/onboarding', {
		user: req.user,
		platforms: platformData,
		genres: genreData
	});
};


exports.doOnboarding = async (req, res, next) => {
	const userInfo = req.body;
	const userID = req.user.id;
	try {
		await profileHelper.saveInfo(userID, userInfo);
console.log(userID);

		res.redirect('/profile');
	} catch (err) {
		next(err);
	}
};	
exports.profile = async (req, res, next) => {
	let myGames = [];
	try {
		const userID = req.user.id;
		myGames = await profileHelper.myGames(userID); // populates usergames into myGames of logged in user
		res.render('pages/profile', {
			title: 'Profile',
			user: req.user,
			games: myGames
		});

	} catch (err) {
		next(err);
	}
};
exports.editProfile = (req, res) => {
	res.render('pages/edit', {
		user: req.user,
		platforms: platformData,
		genres: genreData
	});
};

exports.doEditProfile = (req, res, next) => {
	db.User.findOneAndUpdate({
		_id: req.user._id
	}, {
		$set: {
			name: req.body.name,
			// username: req.body.username,
			platforms: req.body.platforms,
			genres: req.body.genres,
			picture: req.file ? req.file.filename : null,
			about: req.body.about
		}
	}, done);

	function done(err) {
		if (err) {
			next(err);
		} else {

			res.redirect('/profile');
		}
	}
};
