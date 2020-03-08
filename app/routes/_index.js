const express = require('express');

const router = express.Router();

// add HTML routes to current router
router.use(require('.'));
router.use(require('./profile'));
router.use(require('./games'));

module.exports = router;