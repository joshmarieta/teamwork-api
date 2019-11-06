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
