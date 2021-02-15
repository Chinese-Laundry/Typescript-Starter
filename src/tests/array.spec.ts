const arr = require('../libs/array');

describe('test', () => {
  test('matchObjectsTest', async () => {
    expect.arrayContaining(arr());
  });
});
