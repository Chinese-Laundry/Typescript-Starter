const msg = require('../libs/string')

describe('String library test suite', () => {
  const name = 'Jason'
  // TEST 1
  test("Test whether or not the return of msg() contains 'hello'", async () => {
    expect(msg(name)).toContain('Hello')
  })
  // TEST 2
  test("Test whether or not the return of msg() contains 'goodbye'", async () => {
    expect(msg(name)).not.toContain('Goodbye')
  })
})
