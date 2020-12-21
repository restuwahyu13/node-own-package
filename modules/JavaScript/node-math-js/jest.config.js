module.exports = {
  testMatch: [
    '<rootDir>/libs/**/*.{test.js, spec.js}',
    '<rootDir>/tests/**/*.{test.js, spec.js}',
    '<rootDir>/__tests__/**/*.{test.js, spec.js}'
  ],
  collectCoverageFrom: ['src/**/*.js'],
  testPathIgnorePatterns: [
    'app-dev/',
    'coverage',
    'node_modules/',
    '.eslintignore',
    '.eslintrc',
    '.prettierrc',
    'index.d.ts',
    'package.json',
    'yarn.lock'
  ],
  coveragePathIgnorePatterns: [
    'app-dev/',
    'node_modules/',
    'coverage',
    '.eslintignore',
    '.eslintrc',
    '.prettierrc',
    'index.d.ts',
    'package.json',
    'yarn.lock'
  ]
}
