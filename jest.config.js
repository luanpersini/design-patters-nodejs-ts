module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/server/**', '!**/index.ts', '!<rootDir>/src/**/**-protocols.ts',  '!**/tests.mocks/**', '!<rootDir>/src/**/**-factory.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
  '@/(.*)': '<rootDir>/src/$1'
  }
}
