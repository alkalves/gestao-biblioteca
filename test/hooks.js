const request = require('supertest');
const { baseURL } = require('./config');
let jwtToken;

before(async function () {
  // Exemplo: obtenção de token JWT antes dos testes
  const res = await request(baseURL)
    .post('/login')
    .send({ usuario: 'admin', senha: 'admin' });
  jwtToken = res.body.token;
});

module.exports = {
  getToken: () => jwtToken,
};
