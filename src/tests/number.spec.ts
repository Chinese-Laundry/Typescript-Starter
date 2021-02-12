const getSum = require("../libs/number")

describe('test', () => {
  test('getSumTest', async () => {
    expect(getSum(1, 1)).toEqual(2);
  });
});
