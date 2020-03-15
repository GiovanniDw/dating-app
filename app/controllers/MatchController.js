const matchHelper = require('../helpers/match');

let matchController = {};

matchController.show = async (req, res, next) => {
    let users = [];
    try {
        users = await matchHelper.userInfo();
        if (req.user) {
            res.render('pages/index', {
                title: 'Discover',
                user: req.user,
                users: users
            })
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        next(err);
    }
}
module.exports = matchController;