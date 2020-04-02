/* eslint-disable no-async-promise-executor */
const api = require('../helpers/api');
const db = require('../models');

exports.popular = async () => {
	try {
		const results = [];
		const games = await api.findPopular();
		for (let i = 0; i < games.length; i++) {
			results.push(
				new Promise(async function (resolve) {
					const gameItem = {
						id: games[i].id,
						title: games[i].name,
						cover: await api.findCover(games[i].cover, 'cover_big_2x')
					};
					resolve(gameItem);
				})
			);

		}
		const gameItem = await Promise.all(results);
		return gameItem;
	} catch (err) {
		throw new Error('No games today');
	}
};
exports.search = async (query) => {
	try {
		const results = [];
		const games = await api.searchGames(query);
		for (let i = 0; i < games.length; i++) {
			results.push(
				new Promise(async function (resolve) {
					const gameItem = {
						id: games[i].id,
						title: games[i].name,
						cover: await api.findCover(games[i].cover, 'cover_big_2x')
					};
					resolve(gameItem);
				})
			);
		}
		const gameItem = await Promise.all(results);
		return gameItem;
	} catch (err) {
		throw new Error('No search today');
	}
};
exports.findOne = async (id) => {
	try {
		const result = await api.findGameId(id);
		const game = result && result[0];

		if (game) {
			const gameItem = {
				id: game.id,
				title: game.name,
				cover: await api.findCover(game.cover, 'cover_big_2x')
			};
			return gameItem;
		} else {
			throw new Error;
		}
	} catch (err) {
		throw new Error('Game by id not found');
	}
};
exports.findGameId = async (id) => {
	try {
		let game = await db.SingleGame.findById(id);
		return (game);
	} catch (err) {
		throw new Error('Game by id not found');
	}
};
exports.save = (game) => {
	const {
		id,
		title,
		cover
	} = game;
	try {
		let newSingleGame = new db.SingleGame({
			_id: id,
			title: title,
			cover: cover
		});
		newSingleGame.save(function (err, game) { // save the game and use the callback if done
			return game; // if there is not an error resolve the promise
		});
	} catch (err) {
		throw new Error('Can not save');
	}

};
