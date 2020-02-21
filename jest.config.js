module.exports = {
  browser: true,
  testRegex: '(\\.|/)(test|spec)\\.ts?$',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/styleMock.ts',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  rootDir: '__tests__',
  modulePaths: [
    '<rootDir>',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
