// 3-payment.test.js

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM and log correct message', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));
    assert.calledWith(consoleSpy, 'The total is: 231');
    assert(consoleLogSpy.calledWithExactly('The total is: 10'));

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

