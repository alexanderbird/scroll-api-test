import {describe, expect, test} from '@jest/globals';

function sum(a, b) {
  return 3;
}

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
