// tests/app.test.js

import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('Server', () => {
  it('welcomes user to the api', (done) => {
    chai.request(app)
      .get('/')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        done();
      });
  });
});

describe('Server POST test', () => {
  it('post a message aouthroized by a user', (done) => {
    chai.request(app)
      .post('/test')
      .send({ message: 'Hello world' })
      .end((error, res) => {
        expect(res).to.have.status(201);
        expect(res.body.status).to.equals('success');
        expect(res.body.data).to.equals('Hello world');
        done();
      });
  });
});

describe('Server GET test', () => {
  it('returns a message posted by a user', (done) => {
    chai.request(app)
      .get('/test')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.status).to.be.a('string');
        done();
      });
  });
});
