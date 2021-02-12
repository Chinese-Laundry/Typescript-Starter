const getSum = require("./lib/number")

describe('test', () => {
  test('getSum', async () => {
    expect(getSum(1, 1)).toEqual(2);
  });
});
