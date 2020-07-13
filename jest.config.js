module.exports = {
  verbose: true,
  rootDir: './',
  setupFiles: ['<rootDir>/client/jest.setup.js'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/client/components/$1',
    '^constants(.*)$': '<rootDir>/client/constants/$1',
    '^redux([^-].*)': '<rootDir>/client/redux/$1',
    '^utils(.*)$': '<rootDir>/client/utils/$1',
  },

  // Ref: https://github.com/jest-community/jest-extended#api
  setupFilesAfterEnv: ['jest-extended'],
};
