const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // ruta del proyecto
  
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^lucide-react$": "<rootDir>/test/mocks/lucide-react.js",
    "^@/(.*)$": "<rootDir>/$1",
    "^app/(.*)$": "<rootDir>/app/$1",
  },
  
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  
  },
  
};

module.exports = createJestConfig(customJestConfig);