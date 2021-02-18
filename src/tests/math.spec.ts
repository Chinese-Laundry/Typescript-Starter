import * as math from '../libs/math'

/** TEST SUITE INFO */
describe("Test suite for the 'math' library", () => {
  // TEST 1
  test('Tests the sum of two numbers using the add() function', async () => {
    // Example test
    expect(math.add(2, 2)).toEqual(4)
  })

  // TEST 2
  test('Tests the difference between two numbers using the subtract() function', async () => {
    // Example test
    expect(math.subtract(2, 2)).toEqual(0)
  })

  // TEST 3
  test('Tests the product of two numbers using the multiply() function', async () => {
    // Example test
    expect(math.multiply(2, 2)).toEqual(4)
  })

  // TEST 4
  test('Tests the quotient of two numbers using the divide() function', async () => {
    // Example test
    expect(math.divide(2, 2)).toEqual(1)
  })

  // TEST 4
  test('Tests the exponential value of two numbers using the exp() function', async () => {
    // Example test
    expect(math.exp(10, 2)).toEqual(100)
  })
})
