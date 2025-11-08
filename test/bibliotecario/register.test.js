const chai = require('chai');
const request = require('supertest');
const { baseURL } = require('../config');
const bibliotecarios = require('../fixtures/bibliotecario.json');
const expect = chai.expect;

describe('Registro de Bibliotecário', function () {
  it('Deve registrar um usuário que ainda não existe', async function () {
    const res = await request(baseURL)
      .post('/api/bibliotecarios/register')
      .send(bibliotecarios[0]);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
  });

  it('Deve falhar ao registrar um usuário já existente', async function () {
    const res = await request(baseURL)
      .post('/api/bibliotecarios/register')
      .send(bibliotecarios[1]);
    expect(res.status).to.equal(409);
  });

  it('Deve falhar ao registrar sem preencher todos os campos obrigatórios', async function () {
    const res = await request(baseURL)
      .post('/api/bibliotecarios/register')
      .send(bibliotecarios[2]);
    expect(res.status).to.equal(400);
  });
});
