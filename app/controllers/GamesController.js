const gamesHelper = require("../helpers/games");
const profileHelper = require('../helpers/profile');

const gamesController = {};

const games = [];

gamesController.list = async (req, res, next) => {
	try {
		// query is the input to search of the user
		const response = await gamesHelper.popular();
		res.render('pages/games', {
			games: response,
			title: 'Search'
		})
	} catch (err) {
		res.redirect('/games')
		next(err);
	}
}
gamesController.search = (req, res) => {
	res.render('pages/games', {
		games: games
	})
}
gamesController.doSearch = async (req, res, next) => {
	try {
		const query = req.query.q; // query is the input to search of the user
		const response = await gamesHelper.search(query); // goes to gamesHelper search with the search querry. and saves results to response
		res.render('pages/games', {
			games: response, // games rendered to view.
			title: 'Search'
		})
	} catch (err) {
		res.redirect('/games')
		next(err);
	}
}
gamesController.addGame = async (req, res, next) => {
	const id = req.params.id;
	const user = req.user.id;
	try {
		let checkDup = await gamesHelper.findGameId(id); //checks if the id of a game is in the database
		const game = await gamesHelper.findOne(id); // finds/creates game obj


		if (checkDup == false || checkDup == null) {
			//if the id is not in DB, save to db and to user.
			gamesHelper.save(game);
			profileHelper.addGame(user, id);
		} else {
			profileHelper.addGame(user, id);
		}

		res.redirect('/profile');
	} catch (err) {
		next(err)
	}
}
module.exports = gamesController;
