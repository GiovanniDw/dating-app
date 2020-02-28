let express = require('express');
let router = express.Router();
let auth = require("../controllers/AuthController.js");
let match = require("../controllers/MatchController.js")

router.get('/', auth.isLoggedIn, match.show);

router.get('/register', auth.register);
router.post('/register', auth.doRegister);

router.get('/onboarding', auth.isLoggedIn, auth.onboarding);
router.post('/onboarding', auth.isLoggedIn, auth.doOnboarding);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);

router.get('/logout', auth.logout);

module.exports = router;
