const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index Page', () => {
  it('should return correct status code', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.have.status(200);
  });

  it('should return correct result', async () => {
    const res = await chai.request(app).get('/');
    expect(res.text).to.equal('Welcome to the payment system');
  });

});

describe('Cart Page', () => {
  it('should return correct status code when :id is a number', async () => {
    const res = await chai.request(app).get('/cart/123');
    expect(res).to.have.status(200);
  });

  it('should return correct result when :id is a number', async () => {
    const res = await chai.request(app).get('/cart/123');
    expect(res.text).to.equal('Payment methods for cart 123');
  });

  it('should return 404 status code when :id is NOT a number', async () => {
    const res = await chai.request(app).get('/cart/abc');
    expect(res).to.have.status(404);
  });

});
