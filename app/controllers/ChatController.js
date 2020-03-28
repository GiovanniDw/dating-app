exports.chat = async (req, res, next) => {
	try {
		

		if (req.user) {
			res.render('pages/chat', {
				title: 'Chat',
				user: req.user
			});
		} else {
			res.redirect('/login');
		}
	} catch (err) {
		next(err);
	}
};