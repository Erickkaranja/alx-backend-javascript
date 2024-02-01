const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledWithExactly('SUM', 100, 20));

    assert(consoleSpy.calledWithExactly('The total is: 120'));

    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
})
