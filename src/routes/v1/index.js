const express = require('express');

// Route imports
const authRoute = require('./auth.route');

const router = express.Router();

// Routing
router.use('/auth', authRoute);

module.exports = router;
