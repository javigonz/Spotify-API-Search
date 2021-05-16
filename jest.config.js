module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  globals: {},
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.js"],
  setupFiles: [],
  coveragePathIgnorePatterns: ["./src/index.js"],
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 75,
      lines: 85,
      functions: 80,
    },
  },
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx}"],
  automock: false,
  transform: {
    "\\.(js|jsx)": "babel-jest",
  },
  modulePaths: [],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "babel-jest",
  },
};
