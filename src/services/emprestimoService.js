const db = require('./db');
const Emprestimo = require('../models/emprestimo');

exports.register = (req, res) => {
  const { livroId, leitorId, dataEmprestimo, prazoDevolucao, valorEmprestimo, valorMultaDiaria } = req.body;
  if (!livroId || !leitorId || !dataEmprestimo || !prazoDevolucao || !valorEmprestimo || !valorMultaDiaria) return res.status(400).json({ error: 'Campos obrigatórios' });
  const livro = db.livros.find(l => l.id === livroId);
  if (!livro || !livro.disponivel) return res.status(409).json({ error: 'Livro não disponível' });
  const leitor = db.leitores.find(l => l.id === leitorId);
  if (!leitor) return res.status(404).json({ error: 'Leitor não encontrado' });
  const id = db.emprestimos.length + 1;
  const novo = new Emprestimo(id, livroId, leitorId, dataEmprestimo, prazoDevolucao, valorEmprestimo, valorMultaDiaria);
  db.emprestimos.push(novo);
  livro.disponivel = false;
  res.status(201).json(novo);
};

exports.devolucao = (req, res) => {
  const { id } = req.params;
  const { dataDevolucao, valorPago } = req.body;
  const emprestimo = db.emprestimos.find(e => e.id == id);
  if (!emprestimo || emprestimo.status !== 'ativo') return res.status(404).json({ error: 'Empréstimo não encontrado ou já devolvido' });
  const livro = db.livros.find(l => l.id === emprestimo.livroId);
  if (!livro) return res.status(404).json({ error: 'Livro não encontrado' });
  emprestimo.dataDevolucao = dataDevolucao;
  emprestimo.valorPago = valorPago;
  emprestimo.status = 'devolvido';
  livro.disponivel = true;
  // Calcular multa
  const prazo = new Date(emprestimo.prazoDevolucao);
  const devolucao = new Date(dataDevolucao);
  const diasAtraso = Math.max(0, Math.ceil((devolucao - prazo) / (1000 * 60 * 60 * 24)));
  emprestimo.valorTotalDevido = emprestimo.valorEmprestimo + (diasAtraso * emprestimo.valorMultaDiaria);
  res.json(emprestimo);
};
