const service = require('../services/bibliotecarioService');

exports.register = (req, res) => service.register(req, res);
exports.login = (req, res) => service.login(req, res);
