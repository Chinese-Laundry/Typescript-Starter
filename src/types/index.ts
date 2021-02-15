// ----------------------------------------------------------------------------
// This file is used as a central location for Typescript Type aliases. They
// can easily be added to any Typescript project. This will make some of the
// more commonly used type variations readily available.
// ----------------------------------------------------------------------------
// USAGE:
// 1 - Install NodeJS
//     -> https://nodejs.org
// ------------------------------------------------
// 2 - Install Typescript
//     -> npm install -g typescript
//     -> yarn global add typescript
// ------------------------------------------------
// 4 - USE THE HELL OUT OF IT!
//     import { ArrayOfStrings } from 'path/to/Types.ts';
//
//     let returnArrayOfStrings: ArrayOfStrings;
//
//     returnArrayOfStrings = [
//       'string_one',
//       'string_two',
//     ]
// ------------------------------------------------

// Array and Object types
export type ArrayOfStringsOrBooleans = (string|boolean)[];
export type ArrayOfBooleansOrString = ArrayOfStringsOrBooleans;
export type ArrayOfNumbersOrBooleans = (number|boolean)[];
export type ArrayOfBooleansOrNumbers = ArrayOfNumbersOrBooleans;
export type ArrayOfStringsOrNumbers = (string|number)[];
export type ArrayOfNumbersOrStrings = ArrayOfStringsOrNumbers;
export type NotObjectOrArray = string|boolean|number;
export type ArrayOfBooleans = boolean[];
export type BooleanArray = ArrayOfBooleans;
export type ArrayOfStrings = string[];
export type StringArray = ArrayOfStrings;
export type ArrayOfNumbers = number[];
export type NumbersArray = ArrayOfNumbers;
export type ArrayOfAny = any[];
export type ArrayOfMixed = ArrayOfAny;
export type MixedArray = ArrayOfAny;

// ------------------------------------------------
// Null or a function
export type NullOrFunction = Function|null;
export type FunctionOrNull = NullOrFunction;

// ------------------------------------------------
// Null or a callback
export type NullOrCallback = CallableFunction|null;
export type CallBackOrNull = NullOrCallback;

// ------------------------------------------------
// Number or a string
export type NumberOrString = number|string;
export type StringOrNumber = NumberOrString;

// ------------------------------------------------
// Number or a boolean
export type BooleanOrNumber = number|boolean;
export type NumberOrBoolean = BooleanOrNumber;

// ------------------------------------------------
// Null or a string
export type NullOrString = null|string;
export type StringOrNull = NullOrString;

// ------------------------------------------------
// Null or a number
export type NullOrNumber = null|number;
export type NumberOrNull = NullOrNumber;

// ------------------------------------------------
// Null or a boolean
export type NullOrBoolean = null|boolean;
export type BooleanOrNull = NullOrBoolean;

// ------------------------------------------------
// ...
