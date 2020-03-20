const db = require('../models');

const profileHelper = {};

profileHelper.saveInfo = (userID, userInfo) => {
	return new Promise(async (resolve, reject) => {
		let {
			username,
			platform,
			genre,
			about,
			picture
		} = userInfo
		try {
			const user = await db.User.findById(userID);
			let userInfoo = ({
				username: username,
				platforms: platform,
				genre: genre,
				about: about,
				picture: req.file ? req.file.filename : null
			});
			user.username.addToSet(userInfoo);
			await user.save();
			resolve(user);
		} catch (err) {
			reject(err);
		};
	});
};
profileHelper.addGame = (userID, gameID) => {
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
profileHelper.myGames = (userID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await db.User.findById(userID).select('games').populate('games');
			resolve(user.games);
		} catch (err) {
			reject({
				type: 'error'
			})
		}
	})
}
module.exports = profileHelper;
