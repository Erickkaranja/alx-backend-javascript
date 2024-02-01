// 6-payment_token.test.js

const assert = require('chai').assert;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    const resultPromise = getPaymentTokenFromAPI(true);

    resultPromise
      .then((result) => {
        assert.deepEqual(result, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        assert.fail('Promise should not be rejected');
        done();
      });
  });

});
