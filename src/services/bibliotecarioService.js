const db = require('./db');
const Bibliotecario = require('../models/bibliotecario');
const jwt = require('jsonwebtoken');
const SECRET = 'biblioteca_secret';

exports.register = (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ error: 'Campos obrigatórios' });
  if (db.bibliotecarios.find(b => b.email === email)) return res.status(409).json({ error: 'E-mail já cadastrado' });
  const id = db.bibliotecarios.length + 1;
  const novo = new Bibliotecario(id, nome, email, senha);
  db.bibliotecarios.push(novo);
  res.status(201).json({ id: novo.id, nome: novo.nome, email: novo.email });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;
  const user = db.bibliotecarios.find(b => b.email === email && b.senha === senha);
  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '2h' });
  res.json({ token });
};
