exports.chat = (req, res, next) => {
	try {
		res.render('pages/chat', {
			title: 'Chat',
			user: req.user
		});
	
	} catch (err) {
		next(err);
	}
};