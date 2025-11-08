class Livro {
  constructor(id, titulo, anoPublicacao, autorId, genero, disponivel = true) {
    this.id = id;
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
    this.autorId = autorId;
    this.genero = genero;
    this.disponivel = disponivel;
  }
}
module.exports = Livro;
