const obj = require('../libs/object')

describe('test', () => {
  test('matchObjectsTest', async () => {
    expect(obj({})).toMatchObject({})
  })
})
