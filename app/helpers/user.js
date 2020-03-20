const db = require('../models');

const userHelper = {};

userHelper.findOneByEmail = async (email) => {
	const user = await db.User.findOne({
		username: email
	});
	return user;
};
