const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Test case 1: Rounded sum of 2.5 and 3.7 is 7', () => {
    assert.strictEqual(calculateNumber(2.5, 3.7), 7);
  });

  it('Test case 2: Rounded sum of 1 and 2.5 is 4', () => {
    assert.strictEqual(calculateNumber(1, 2.5), 4);
  });

  it('Test case 3: Rounded sum of 2.5 and 2 is 5', () => {
    assert.strictEqual(calculateNumber(2.5, 2), 5);
  });

  it('Test case 4: Rounded sum of -1.2 and 4.9 should be 4', () => {
    assert.strictEqual(calculateNumber(-1.2, 4.9), 4);
  });

  it('Test case 5: Rounded sum of 5.8 and 0.3 should be 6', () => {
    assert.strictEqual(calculateNumber(5.8, 0.3), 6);
  });

  it('Test case 6: Rounded sum of 0 and 0 should be 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('Test case 7: Rounded sum of 1.5 and -1.5 should be 1', () => {
    assert.strictEqual(calculateNumber(1.5, -1.5), 1);
  });

  it('Test case 8: Rounded sum of 0.1 and 0.2 should be 0', () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('Test case 9: Rounded sum of 100 and -99.6 should be 0', () => {
    assert.strictEqual(calculateNumber(100, -99.6), 0);
  });

  it('Test case 10: Rounded sum of 1.49 and 1.51 should be 3', () => {
    assert.strictEqual(calculateNumber(1.49, 1.51), 3);
  });

  it('Test case 11: Rounded sum of -5.6 and -5.4 should be -11', () => {
    assert.strictEqual(calculateNumber(-5.6, -5.4), -11);
  });

  it('Test case 12: Rounded sum of 1000000 and 0.0001 should be 1000000', () => {
    assert.strictEqual(calculateNumber(1000000, 0.0001), 1000000);
  });

  it('Test case 13: Rounded sum of 1.999 and 0.001 should be 2', () => {
    assert.strictEqual(calculateNumber(1.999, 0.001), 2);
  });

  it('Test case 14: Rounded sum of -3.999 and 4.999 should be 1', () => {
    assert.strictEqual(calculateNumber(-3.999, 4.999), 1);
  });
});
