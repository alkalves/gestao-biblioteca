const service = require('../services/livroService');

exports.register = (req, res) => service.register(req, res);
