const express = require('express');
const controller = require('../controllers/autorController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, controller.register);

module.exports = router;
