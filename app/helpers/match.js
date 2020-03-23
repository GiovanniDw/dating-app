const db = require('../models');

const matchHelper = {};

matchHelper.userInfo = async () => {
	try {
		const users = await db.User.find();
		return users;
	} catch (err) {
		reject(err);
	}
};

module.exports = matchHelper;
