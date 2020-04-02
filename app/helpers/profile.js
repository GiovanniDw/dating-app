/* eslint-disable no-async-promise-executor */
const db = require('../models');

exports.saveInfo = (userID, userInfo, avatar) => {
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
				about: about,
				picture: avatar
			});
			await user.save();
			resolve('user');
		} catch (err) {
			reject(err);
		}
	});
};

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