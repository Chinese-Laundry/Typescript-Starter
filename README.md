# Chinese Laundry TypeScript Starter | 2021
> A starter template for any and all projects, builds or libraries related to Chinese Laundry. This
> includes `jest` for testing, `eslint` and `prettier` for formatting, `nodemon` for live development
> and watchers for live testing and hot reloading.
> ___
- All original credit goes to the author of the [this repo](https://github.com/stemmlerjs/simple-typescript-starter)

## Features
|   Library/Feature  |   Version   |                  NPM/Source URL               |
|--------------------|-------------|-----------------------------------------------|
|      TypeScript    | `^ 04.0.3`  | [Visit Link](https://www.typescriptlang.org/) |
|         Jest       | `^ 26.5.3`  | [Visit Link](https://jestjs.io/)              |
|       Prettier     | `^ 1.19.1`  | [Visit Link](https://prettier.io/)            |
|       Nodemon      | `^1.19.1`   | [Visit Link](https://nodemon.io/)             |
|        Jsdoc       | `^3.6.6`    | [Visit Link](https://jsdoc.app/)              |
|        Eslint      | `^6.8.0`    | [Visit Link](https://eslint.org/)             |
|      Circle CI     |   `N/A`     | [Visit Link](https://circleci.com/)           |

## Usage
 - Starts the application in development using `nodemon` and `ts-node` to do hot reloading.
    - `npm run start:dev`

 - Starts the app in production by first building the project with `npm run build`, and then 
executing the compiled JavaScript at `build/index.js`.
   - `npm run start`

 - Builds the app at `build`, cleaning the folder first.
   - `npm run build`

 - Runs the tests once.
   - `npm run test`

 - Run tests in watch mode, waiting for file changes.
   - `npm run test:dev`

 - Runs the tests once and produce coverage reports
   - `npm run test:coverage`

 - Format your code using prettier
   - `npm run prettier-format`

 - Format your code in watch mode, waiting for file changes
   - `npm run prettier-watch`

 - Generate documentation for everything located in `src/libs`
   - `npm run docs:generate`

## License
BSD 3-Clause License

Copyright (c) 2021, Chinese Laundry, LLC
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
