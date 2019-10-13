module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@assets/(.*)': '<rootDir>/assets/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '@helpers/(.*)': '<rootDir>/helpers/$1',
    '@interfaces/(.*)': '<rootDir>/interfaces/$1',
    '@layouts/(.*)': '<rootDir>/layouts/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@reducers/(.*)': '<rootDir>/reducers/$1',
    '@routes/(.*)': '<rootDir>/routes/$1',
    '@store/(.*)': '<rootDir>/store/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
  },
  rootDir: 'src',
  setupTestFrameworkScriptFile: './setupEnzyme.tsx',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  testRegex: '(/__integration__/.*|(\\.|/)(integration))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};