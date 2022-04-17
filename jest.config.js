module.exports = {
    displayName: 'map-optimization-system',
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json',
      },
    },
    transform: {
      '^.+\\.[tj]s$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverage: true,
    coverageDirectory:
      '<rootDir>/test/coverage',
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
        "@db" : "<rootDir>/src/database/index",
        "@common": "<rootDir>/src/common/index",
        "@error/(.*)": "<rootDir>/src/error/$1",
        "@location/(.*)": "<rootDir>/src/location/$1",
        "@mock/(.*)": "<rootDir>/mock/$1",
   }
  };
  