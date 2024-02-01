// 5-payment.test.js

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
    sendPaymentRequestToApi(100, 20);

    assert(consoleLogSpy.calledWithExactly('The total is: 120'));

    assert.strictEqual(consoleLogSpy.callCount, 1);
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    sendPaymentRequestToApi(10, 10);

    assert(consoleLogSpy.calledWithExactly('The total is: 20'));

    assert.strictEqual(consoleLogSpy.callCount, 1);
  });
});

