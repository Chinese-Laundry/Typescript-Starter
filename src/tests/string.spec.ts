const msg = require('../libs/string');

describe('test', () => {
  test('strContainsTest', async () => {
    expect(msg('Hello world!')).toContain(' world');
  });
});
