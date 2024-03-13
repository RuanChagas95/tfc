import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import {app} from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
});

describe('test routes return success status', () => {
  it('should /leaderboard get return 200', async () => {
    const res = await chai.request(app).get('/leaderboard');
    expect(res.status).to.equal(200);
  });
  it('should /leaderboard/home get return 200', async () => {
    const res = await chai.request(app).get('/leaderboard/home');
    expect(res.status).to.equal(200);
  });
  it('should /leaderboard/away get return 200', async () => {
    const res = await chai.request(app).get('/leaderboard/away');
    expect(res.status).to.equal(200);
  });
  it('should /login post return 200', async () => {
    const res = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin' });
    expect(res.status).to.equal(200);
  });
  it('should /matches get return 200', async () => {
    const res = await chai.request(app).get('/matches');
    expect(res.status).to.equal(200);
  });
  it('should /matches/1 get return 200', async () => {
    const res = await chai.request(app).get('/matches/1');
    expect(res.status).to.equal(200);
  });
});
