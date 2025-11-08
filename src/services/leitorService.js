const db = require('./db');
const Leitor = require('../models/leitor');

exports.register = (req, res) => {
  const { nome, cpf, email, telefone } = req.body;
  if (!nome || !cpf || !email || !telefone) return res.status(400).json({ error: 'Campos obrigatórios' });
  if (db.leitores.find(l => l.email === email)) return res.status(409).json({ error: 'E-mail já cadastrado' });
  const id = db.leitores.length + 1;
  const novo = new Leitor(id, nome, cpf, email, telefone);
  db.leitores.push(novo);
  res.status(201).json(novo);
};
