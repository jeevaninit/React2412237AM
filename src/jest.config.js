export default {
    testEnvironment: "jsdom", // Simulate a browser environment
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Setup file for React Testing Library
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1", // Map imports starting with @/ to the src directory
    },
  };