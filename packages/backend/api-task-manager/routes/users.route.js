const express = require('express');
const router = express.Router();
const { usersController } = require('../controllers/users.controller');
const protect = require('../middleware/protect');

router.get('/', [protect, usersController]);

module.exports = router;