const sum = require('../libs/number');

describe('test', () => {
  test('getSumTest', async () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
