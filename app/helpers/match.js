/* eslint-disable no-async-promise-executor */
const db = require('../models');



exports.users = async (thisUser) => {
	return new Promise(async function (resolve, reject) {
		try {
			let users = [];
			// let ids = Array.concat(thisUser._id);
			// let findAll = await db.User.find();
			// let object = {};
			// let ids = Array.concad(thisUser._id,thisUser.like, thisUser.dislike);
			// object._id = { $nin: ids};
			// let user = await db.User.findById(thisUser._id);
			// if (user != findAll) {
			// 	users.push(findAll);
			// }
			users = db.User.find({_id: { $ne: thisUser._id}});
			// users.push(db.User.find());
			
			resolve(users);
		} catch (err) {
			reject({
				type: 'error'
			});
		}
	});
};
exports.like = (userID, voteID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await db.User.findById(userID);
			const checkDup = user.like.includes(voteID);
			if (!checkDup) {
				user.like.push(voteID);
				await user.save();
			}
			resolve('has resolved');
		} catch (err) {
			reject(err);
		}
	});
};
exports.dislike = (userID, voteID) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await db.User.findById(userID);
			const checkDup = user.dislike.includes(voteID);
			if (!checkDup) {
				user.dislike.push(voteID);
				await user.save();
			}
			resolve('has resolved');
		} catch (err) {
			reject(err);
		}
	});
};





// exports.match = async (userID) => {
// 	return new Promise(async function (resolve, reject) {

// 		let matches = [];
// 		try {


// 			await db.User.findOne(userID);

// 			resolve(matches);
// 		} catch (err) {
// 			reject({
// 				type: 'error'
// 			});
// 		}
// 	});


// };
