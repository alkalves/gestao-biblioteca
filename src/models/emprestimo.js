class Emprestimo {
  constructor(id, livroId, leitorId, dataEmprestimo, prazoDevolucao, valorEmprestimo, valorMultaDiaria) {
    this.id = id;
    this.livroId = livroId;
    this.leitorId = leitorId;
    this.dataEmprestimo = dataEmprestimo;
    this.prazoDevolucao = prazoDevolucao;
    this.valorEmprestimo = valorEmprestimo;
    this.valorMultaDiaria = valorMultaDiaria;
    this.status = 'ativo';
    this.dataDevolucao = null;
    this.valorPago = null;
    this.valorTotalDevido = null;
  }
}
module.exports = Emprestimo;
