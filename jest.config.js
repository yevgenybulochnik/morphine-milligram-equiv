const { pathsToModuleNameMapper } = require('ts-jest/utils')


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
