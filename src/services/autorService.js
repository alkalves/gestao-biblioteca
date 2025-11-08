const db = require('./db');
const Autor = require('../models/autor');

exports.register = (req, res) => {
  const { nome, nacionalidade } = req.body;
  if (!nome || !nacionalidade) return res.status(400).json({ error: 'Campos obrigatórios' });
  if (db.autores.find(a => a.nome === nome && a.nacionalidade === nacionalidade)) return res.status(409).json({ error: 'Autor já cadastrado' });
  const id = db.autores.length + 1;
  const novo = new Autor(id, nome, nacionalidade);
  db.autores.push(novo);
  res.status(201).json(novo);
};
