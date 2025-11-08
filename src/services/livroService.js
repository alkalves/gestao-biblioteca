const db = require('./db');
const Livro = require('../models/livro');

exports.register = (req, res) => {
  const { titulo, anoPublicacao, autorId, genero } = req.body;
  if (!titulo || !anoPublicacao || !autorId || !genero) return res.status(400).json({ error: 'Campos obrigatórios' });
  if (!db.autores.find(a => a.id === autorId)) return res.status(404).json({ error: 'Autor não encontrado' });
  const id = db.livros.length + 1;
  const novo = new Livro(id, titulo, anoPublicacao, autorId, genero);
  db.livros.push(novo);
  res.status(201).json(novo);
};
