const express = require('express');
const router = express.Router();

const games = require("../controllers/GamesController");
const auth = require("../controllers/AuthController");

router.get('/', auth.isLoggedIn, games.list);
router.get('/search', auth.isLoggedIn, games.search);
router.get('/search/:query?', auth.isLoggedIn, games.doSearch);
router.post('/add/:id', auth.isLoggedIn, games.addGame);

module.exports = router;


