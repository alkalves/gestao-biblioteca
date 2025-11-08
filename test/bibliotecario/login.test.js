const chai = require('chai');
const request = require('supertest');
const { baseURL } = require('../config');
const logins = require('../fixtures/login_bibliotecario.json');
const expect = chai.expect;

describe('Login de Bibliotecário', function () {
  it('Deve autenticar com credenciais válidas', async function () {
    const res = await request(baseURL)
      .post('/api/bibliotecarios/login')
      .send(logins[0]);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('Deve falhar ao autenticar com credenciais inválidas', async function () {
    const res = await request(baseURL)
      .post('/api/bibliotecarios/login')
      .send(logins[1]);
    expect(res.status).to.equal(401);
  });

  it('Deve falhar ao autenticar sem preencher campos obrigatórios', async function () {
    const res = await request(baseURL)
      .post('/api/bibliotecarios/login')
      .send(logins[2]);
    expect(res.status).to.equal(400);
  });
});
