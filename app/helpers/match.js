const db = require('../models');



exports.userInfo = async () => {
	// try {
	// 	const users = await db.User.find();
	// 	return users;
	// } catch (err) {
	// 	reject(err);
	// }

	return new Promise(async function (resolve, reject) {
		try {
			const users =
				await db.User.find();

			resolve(users);
		} catch (err) {
			reject({
				type: 'error'
			});
		}
	});


};
