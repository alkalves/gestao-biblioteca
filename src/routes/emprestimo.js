const express = require('express');
const controller = require('../controllers/emprestimoController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, controller.register);
router.post('/devolucao/:id', auth, controller.devolucao);

module.exports = router;
