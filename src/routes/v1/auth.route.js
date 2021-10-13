const express = require('express');

// Controller imports
const authController = require('../../controllers/auth.controller');

const router = express.Router();

// Endpoints
router.post('/register', authController.register);

module.exports = router;
