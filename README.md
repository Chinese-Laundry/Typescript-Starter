# Chinese Laundry TypeScript Starter | 2021
> A starter template for any and all TypeScript libraries related to Chinese laundry projects. This
> includes `jest` for testing, `eslint` and `prettier` for formatting, `nodemon` for live development
> and watchers for live testing and hot reloading.
> ___

 - All original credit goes to the author of the [original repo](https://github.com/stemmlerjs/simple-typescript-starter)

### Features
- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon

### Scripts

 - Starts the application in development using `nodemon` and `ts-node` to do hot reloading.
   - `npm run start:dev`

 - Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.
   - `npm run start`

 - Builds the app at `build`, cleaning the folder first.
   - `npm run build`

 - Runs the `jest` tests once.
   - `npm run test`

 - Run the `jest` tests in watch mode, waiting for file changes.
   - `npm run test:dev`

 - Format your code using prettier
   - `npm run prettier-format`

 - Format your code in watch mode, waiting for file changes
   - `npm run prettier-watch`

