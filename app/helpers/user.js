const db = require('../models');



exports.findOneByEmail = async (email) => {
	const user = await db.User.findOne({
		username: email
	});
	return user;
};
