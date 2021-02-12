const getMessage = require('../libs/string')

describe('test', () => {
  test('strContainsTest', async () => {
    expect(getMessage('Hello world!')).toContain(' world');
  });
});
