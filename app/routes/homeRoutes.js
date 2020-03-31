const express = require('express');

const authController = require('../controllers/AuthController.js');
const auth = require('../../config/middleware/authorization');
const match = require('../controllers/MatchController.js');

const router = express.Router();

router.get('/', auth.requiresLogin ,match.users);
router.post('/vote/:id', auth.requiresLogin, match.vote);
// router.get('/:id', auth.requiresLogin, match.dislike);

router.get('/login', authController.login);
router.post('/login', authController.doLogin);

router.get('/register', authController.register);
router.post('/register', authController.doRegister);

router.get('/logout', authController.logout);

module.exports = router;
