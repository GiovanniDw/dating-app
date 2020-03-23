const db = require('../models');



exports.userInfo = async () => {
	try {
		const users = await db.User.find();
		return users;
	} catch (err) {
		reject(err);
	}
};
