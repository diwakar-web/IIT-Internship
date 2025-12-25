const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
