
### Step 1: Set Up a Vite React Project

If you don’t already have a Vite React project, create one:

```bash
npm create vite@latest my-vite-react-app
cd my-vite-react-app
npm install


###  Install Testing Dependencies

Install the necessary testing libraries:


npm install --save-dev @testing-library/react @testing-library/jest-dom jest @types/jest @testing-library/user-event


###  Configure Jest

Vite doesn’t come with Jest preconfigured, so you’ll need to set it up manually.

1. Create a `jest.config.js` file in the root of your project:


export default {
  testEnvironment: "jsdom", // Simulate a browser environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup file for React Testing Library
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map imports starting with @/ to the src directory
  },
};


2. Create a `jest.setup.js` file to configure React Testing Library:


import "@testing-library/jest-dom/extend-expect";


3. Update `package.json` to include a test script:

json
"scripts": {
  "test": "jest"
}

### Run the Tests

Run the tests using the following command:

npm test
```

