const express = require('express');

const auth = require('../controllers/HomeController.js');
const match = require('../controllers/MatchController.js');
const profile = require('../controllers/ProfileController.js');

const router = express.Router();

const multer = require('multer');
const upload = multer({
	dest: './static/uploads/'
});


router.get('/', match.show);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);

router.get('/register', auth.register);
router.post('/register', auth.doRegister);

router.get('/onboarding', profile.onboarding);
router.post('/onboarding', upload.single('picture'), profile.doOnboarding);

router.get('/logout', auth.logout);

module.exports = router;
