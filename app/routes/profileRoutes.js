const express = require('express');
const router = express.Router();

const auth = require('../controllers/HomeController.js');
const profile = require('../controllers/ProfileController.js');

const mustBeLoggedIn = require('../../config/middleware/mustBeLoggedIn');

const multer = require('multer');
const upload = multer({
	dest: './static/uploads/'
});

router.get('/', profile.profile);
router.get('/edit', auth.isLoggedIn, profile.editProfile);
router.post('/edit', upload.single('picture'), profile.doEditProfile);

module.exports = router;
