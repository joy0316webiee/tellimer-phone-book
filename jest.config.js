const path = require('path');
const resolve = require('resolve');

module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: resolve.sync('jest-environment-jsdom', {
    basedir: require.resolve('jest'),
  }),
  resetMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  coverageThreshold: {
    global: {
        branches: 55,
        functions: 68,
        lines: 80,
        statements: 80,
    },
  },
};
