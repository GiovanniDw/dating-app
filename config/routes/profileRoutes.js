const express = require('express');
const router = express.Router();

const profile = require('../../app/controllers/ProfileController');

const auth = require('../middleware/authorization');

const multer = require('multer');
const upload = multer({
	dest: './static/uploads/'
});

router.get('/', auth.requiresLogin ,profile.profile);
router.get('/edit', auth.requiresLogin, profile.editProfile);
router.post('/edit', upload.single('picture'), profile.doEditProfile);
router.get('/onboarding', auth.requiresLogin, profile.onboarding);
router.post('/onboarding', upload.single('picture'), profile.doOnboarding);

module.exports = router;



