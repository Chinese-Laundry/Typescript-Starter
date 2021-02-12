const getMessage = require('./lib/string')

describe('test', () => {
  test('strContains', async () => {
    expect(getMessage('Hello world!')).toContain(' world');
  });
});
