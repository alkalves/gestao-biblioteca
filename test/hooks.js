const request = require('supertest');
const { baseURL } = require('./config');
let jwtToken;

before(async function () {
  // Exemplo: obtenção de token JWT antes dos testes
  // Ajuste o endpoint e payload conforme sua API
  const res = await request(baseURL)
    .post('/api/bibliotecarios/login')
    .send({ email: 'bibliotest1@email.com', senha: 'senha123' });
  jwtToken = res.body.token;
});

module.exports = {
  getToken: () => jwtToken,
};
