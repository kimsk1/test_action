import * as sum from './test2';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(1, 2)).toBe(3);
  });
}); 