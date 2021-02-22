/**
 * Function that returns the sum of two numbers
 *
 * @param {number} x The addend (x)
 * @param {number} y The addend (y)
 *
 * @return {number} The sum
 */
export const add = (x: number, y: number): number => x + y

/**
 * Function that returns the difference between two numbers
 *
 * @param {number} x The minuend
 * @param {number} y The subtrahend
 *
 * @return {number} The difference
 */
export const subtract = (x: number, y: number): number => x - y

/**
 * Function that returns the quotient of two numbers
 *
 * @param {number} x The dividend
 * @param {number} y The divisor
 *
 * @return {number} The quotient
 */
export const divide = (x: number, y: number): number => x / y

/**
 * Function that returns the product of two numbers
 *
 * @param {number} x The multiplier
 * @param {number} y The multiplicand
 *
 * @return {number} The product
 */
export const multiply = (x: number, y: number): number => x * y

/**
 * Function that returns the exponential value of two numbers
 *
 * @param {number} x The base
 * @param {number} y The exponent
 *
 * @return {number} The value of x^y
 */
export const exp = (x: number, y: number): number => Math.pow(x, y)

/**
 * Function that returns the value of Pi
 *
 * @return {number} The value Pi
 */
export const pi = (): number => Math.PI

/**
 * Function that returns the value of x, rounded down
 *
 * @param {number} x The number to round up
 * n
 * @return {number} The value of x rounded up
 */
export const ceil = (x: number): number => Math.ceil(x)

/**
 * Function that returns the value of x, rounded up
 *
 * @param {number} x The number to round down
 *
 * @return {number} The value of x rounded down
 */
export const floor = (x: number): number => Math.floor(x)

/**
 * Return value, in square feet
 *
 * @param {number} l Length's value
 * @param {number} w Width's value
 *
 * @return {number} Return value [in square feet]
 */
export const sqft = (l: number, w: number): number => multiply(l, w)

/**
 * Return value, in cubic feet
 *
 * @param {number} l Length
 * @param {number} w Width
 * @param {number} h Height
 *
 * @return {number} Return value [in cubic feet]
 */
export const cuft = (l: number, w: number, h: number): number => l * w * h
