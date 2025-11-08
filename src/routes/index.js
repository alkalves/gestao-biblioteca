const express = require('express');
const router = express.Router();

const bibliotecarioRoutes = require('./bibliotecario');
const autorRoutes = require('./autor');
const livroRoutes = require('./livro');
const leitorRoutes = require('./leitor');
const emprestimoRoutes = require('./emprestimo');

router.use('/bibliotecarios', bibliotecarioRoutes);
router.use('/autores', autorRoutes);
router.use('/livros', livroRoutes);
router.use('/leitores', leitorRoutes);
router.use('/emprestimos', emprestimoRoutes);

module.exports = router;
