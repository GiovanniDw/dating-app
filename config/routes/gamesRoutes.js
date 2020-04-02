const express = require('express');
const router = express.Router();

const games = require('../../app/controllers/GamesController');
const auth = require('../middleware/authorization');

router.get('/', auth.requiresLogin, games.list);
router.get('/search', auth.requiresLogin, games.search);
router.get('/search/:query?', auth.requiresLogin, games.doSearch);
router.post('/add/:id', auth.requiresLogin, games.addGame);

module.exports = router;


