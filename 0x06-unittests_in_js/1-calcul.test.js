// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('Type: SUM', () => {
    it('Test case 1: should rounded sum 2.5 and 3.7 to be 7', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.7), 7);
    });

    it('Test case 2: Rounded sum of 1 and 2.5 is 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2.5), 4);
    });

    it('Test case 3: Rounded sum of 2.5 and 2 is 5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 2), 5);
    });

    it('Test case 4: Rounded sum of -1.2 and 4.9 should be 4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, 4.9), 4);
    });

    it('Test case 5: Rounded sum of 5.8 and 0.3 should be 6', () => {
      assert.strictEqual(calculateNumber('SUM', 5.8, 0.3), 6);
    });

    it('Test case 6: Rounded sum of 0 and 0 should be 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('Test case 7: Rounded sum of 1.5 and -1.5 should be 1', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, -1.5), 1);
    });

    it('Test case 8: Rounded sum of 0.1 and 0.2 should be 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    });

    it('Test case 9: Rounded sum of 100 and -99.6 should be 0', () => {
      assert.strictEqual(calculateNumber('SUM', 100, -99.6), 0);
    });

    it('Test case 10: Rounded sum of 1.49 and 1.51 should be 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1.49, 1.51), 3);
    });

    it('Test case 11: Rounded sum of -5.6 and -5.4 should be -11', () => {
      assert.strictEqual(calculateNumber('SUM', -5.6, -5.4), -11);
    });

    it('Test case 12: Rounded sum of 1000000 and 0.0001 should be 1000000', () => {
      assert.strictEqual(calculateNumber('SUM', 1000000, 0.0001), 1000000);
    });

    it('Test case 13: Rounded sum of 1.999 and 0.001 should be 2', () => {
      assert.strictEqual(calculateNumber('SUM', 1.999, 0.001), 2);
    });

    it('Test case 14: Rounded sum of -3.999 and 4.999 should be 1', () => {
      assert.strictEqual(calculateNumber('SUM', -3.999, 4.999), 1);
    });

  });

  describe('Type: SUBTRACT', () => {
    it('Test case 1: Rounded subtraction 1.2 from 4.9 to be 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.9, 1.2), 4);
    });
    it('Test case 2: Rounded subtraction of -1.2 and 4.9 should be -6', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, 4.9), -6);
    });

    it('Test case 3: Rounded subtraction of 5.8 and 0.3 should be 5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.8, 0.3), 6);
    });

    it('Test case 4: Rounded subtraction of 0 and 0 should be 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('Test case 5: Rounded subtraction of 1.5 and -1.5 should be 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -1.5), 3);
    });

    it('Test case 6: Rounded subtraction of 0.1 and 0.2 should be 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
    });

    it('Test case 7: Rounded subtraction of 100 and -99.6 should be 200', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 100, -99.6), 200);
    });

    it('Test case 8: Rounded subtraction of 1.49 and 1.51 should be 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.49, 1.51), -1);
    });

    it('Test case 9: Rounded subtraction of -5.6 and -5.4 should be -1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.6, -5.4), -1);
    });

    it('Test case 10: Rounded subtraction of 1000000 and 0.0001 should be 1000000', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1000000, 0.0001), 1000000);
    });

    it('Test case 11: Rounded subtraction of 1.999 and 0.001 should be 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.999, 0.001), 2);
    });

    it('Test case 12: Rounded subtraction of -3.999 and 4.999 should be -9', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.999, 4.999), -9);
    });

    it('Test case 13: Rounded subtraction of 5.5 and 5.5 should be 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 5.5), 0);
    });

    it('Test case 14: Rounded subtraction of -3 and 0 should be -3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3, 0), -3);
    });

    it('Test case 15: Rounded subtraction of -2 and -2 should be 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2, -2), 0);
    });
  });

  describe('Type: DIVIDE', () => {
    it('should round and divide 5.8 by 0.3 to be Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.8, 0.3), 'Error');
    });

    it('should return "Error" when trying to divide by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.8, 0), 'Error');
    });
    it('Test case 2: Rounded division of 10 by -2 should be -5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, -2), -5);
    });

    it('Test case 3: Rounded division of -15 by 5 should be -3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -15, 5), -3);
    });

    it('Test case 4: Rounded division of 0 by 2 should be 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 2), 0);
    });

    it('Test case 5: Rounded division of 1 by 0.5 should be 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.5), 1);
    });

    it('Test case 6: Rounded division of 7 by -1.5 should be -7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7, -1.5), -7);
    });

    it('Test case 7: Rounded division of -8 by 0.4 should be Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8, 0.4), 'Error');
    });

    it('Test case 8: Should return "Error" when trying to divide by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });

    it('Test case 9: Rounded division of 100 by 0.0001 should be Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 100, 0.0001), 'Error');
    });

    it('Test case 10: Rounded division of 1.999 by 0.001 should be Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.999, 0.001), 'Error');
    });

    it('Test case 11: Rounded division of -3.999 by 4.999 should be -0.8', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.999, 4.999), -0.8);
    });

    it('Test case 12: Rounded division of 5.5 by 2.5 should be 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.5), 2);
    });

    it('Test case 13: Rounded division of -6 by -3 should be 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, -3), 2);
    });

    it('Test case 14: Rounded division of -10 by 5 should be -2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -10, 5), -2);
    });

    it('Test case 15: Rounded division of -2 by -2 should be 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2, -2), 1);
    });
  });

});
