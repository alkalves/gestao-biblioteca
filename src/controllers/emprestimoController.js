const service = require('../services/emprestimoService');

exports.register = (req, res) => service.register(req, res);
exports.devolucao = (req, res) => service.devolucao(req, res);
