const express = require('express');
const router = express.Router();

const chat = require('../../app/controllers/ChatController');
const auth = require('../middleware/authorization');

router.get('/', auth.requiresLogin, chat.chat);

module.exports = router;