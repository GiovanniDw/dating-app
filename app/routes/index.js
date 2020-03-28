const express = require('express');

const router = express.Router();

// add HTML routes to current router
router.use('/chat', require('./chatRoutes'));
router.use('/games', require('./gamesRoutes'));
router.use('/profile', require('./profileRoutes'));

router.use(require('./homeRoutes'));

module.exports = router;