const db = require('../models');

exports.saveInfo = (userID, userInfo) => {
	
	return new Promise(async (resolve, reject) => {
		let {name, platforms, genres, about} = userInfo;
		try {
			const user = await db.User.findById(userID);
			// let newUserInfo = ({
			// 	name: name,
			// 	platforms: platforms,
			// 	genres: genres,
			// 	about: about
			// });
			user.set({
				name: name,
				platforms: platforms,
				genres: genres,
				about: about
			});


			
			await user.save();
			resolve(user);
		} catch (err) {
			reject(err);
		}
	});
};

// User.findById(req.params.id, (err, user) => {
// 	// This assumes all the fields of the object is present in the body.
// 	user.name = req.body.name;
// 	user.age = req.body.age;
// 	user.country = req.body.country;

// 	user.save((saveErr, updatedUser) => {
// 		res.send({
// 			data: updatedUser
// 		});
// 	});
// });


exports.addGame = (userID, gameID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await db.User.findById(userID);
			const checkDup = user.games.includes(gameID);
			if (!checkDup) {
				user.games.push(gameID);
				await user.save();
			}

			resolve('has resolved');
		} catch (err) {
			reject(err);
		}
	});
};
exports.myGames = (userID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await db.User.findById(userID).select('games').populate('games');
			resolve(user.games);
		} catch (err) {
			reject({
				type: 'error'
			});
		}
	});
};
