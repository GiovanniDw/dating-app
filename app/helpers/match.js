/* eslint-disable no-async-promise-executor */
const db = require('../models');



exports.users = async (thisUser) => {
	let object = {};
	let ids = [].concat(thisUser._id, thisUser.likes, thisUser.dislikes);
	
	object._id = {
		$nin: ids
	};
	// console.log(ids);
	return new Promise(async function (resolve, reject) {
		try {
			
			// let ids = Array.concat(thisUser._id);
			//let findAll = await db.User.find();
			
			// let user = await db.User.findById(thisUser._id);
			// if (user != findAll) {
			// 	users.push(findAll);
			// }


			let users = await db.User.find(object);
			resolve(users);
			
			// users.push(db.User.find());
			
			
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
			const checkDup = user.likes.includes(voteID);
			if (!checkDup) {
				user.likes.push(voteID);
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
			const checkDup = user.dislikes.includes(voteID);
			if (!checkDup) {
				user.dislikes.push(voteID);
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
