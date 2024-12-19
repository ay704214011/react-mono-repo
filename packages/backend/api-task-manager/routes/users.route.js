const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/users.controller');
const protect = require('../middleware/protect');

router.get('/', [protect, getUsers]);

module.exports = router;