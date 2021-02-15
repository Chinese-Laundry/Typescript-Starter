const returnArray = require('../libs/array');

describe('test', () => {
  test('matchObjectsTest', async () => {
    expect.arrayContaining(returnArray());
  });
});
