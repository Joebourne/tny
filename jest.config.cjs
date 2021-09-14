const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@client(.*)$': '<rootDir>/src/client$1',
    '^@server(.*)$': '<rootDir>/src/server$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};

module.exports = config;
