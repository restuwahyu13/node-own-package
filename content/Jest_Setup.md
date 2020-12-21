## Jest Package Library

### TABLE OF CONTENT

- [Get Started](#get-started)
  - [Jest Config](#Jest-Config)
  - [Jest Package json Setup](#Jest-Package-json-Setup)
  - [Jest Test Success](#Jest-Test-Success)
  - [Jest Watch Test Success](#Jest-Watch-Test-Success)
  - [Jest Coverage Test Success](#Jest-Coverage-Test-Success)

### Jest Introduction

**Jest** adalah sebuah tools untuk melakukan `Test Driven Development` yaitu sebuah serangkaian `test` untuk melakukan pengujian dari setiap baris code yang telah kita tuliskan, seperti tools `Test Driven Development` lainnya seperti `mocha`, 'ava', 'chai' dll

### Jest Config

- **testMatch** berfungsi untuk mencocokan nama file mana yang akan di eksekusi ketika ingin melakukan `TDD Testing`
- **collectCoverageFrom** berfungsi untuk mengumpulkan data dari `package library` yang telah di buat, untuk mendapatkan sebuah penilaian
- **testPathIgnorePatterns** berfungsi untuk mengecualikan assets saat melakukan `TDD Testing` sedang berjalan, agar assets tidak di eksekusi di saat test sedang berlangsung
- **coveragePathIgnorePatterns** berfungsi untuk mengecualikan assets saat melakukan `TDD Testing + Coverage` agar assets tidak di eksekusi di saat test sedang berlangsung
- **preset** berfungsi sebagai parser untuk transpiler code

#### Nodejs

```javascript
module.exports = {
  testMatch: ['<rootDir>/tests/**/*.{test.js, spec.js}', '<rootDir>/__tests__/**/*.{test.js, spec.js}'],
  collectCoverageFrom: ['src/libs**/*.js'],
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
```

#

#### Nodejs TypeScript

```javascript
module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/tests/**/*.{test.ts, spec.ts}', '<rootDir>/__tests__/**/*.{test.ts, spec.ts}'],
  collectCoverageFrom: ['src/libs/**/*.ts'],
  testPathIgnorePatterns: [
    '__test__/',
    'app-dev/',
    'coverage',
    'dist/',
    'esm/',
    'node_modules',
    '.coveralla.yml',
    '.editorconfig',
    '.eslintignore',
    '.eslintrc',
    '.gitignore',
    '.prettierrc',
    '.travis.yml',
    'jest.config.js',
    'package.json',
    'package.lock.json',
    'Readme.md',
    'tsconfig.json'
  ],
  coveragePathIgnorePatterns: [
    '__test__/',
    'app-dev/',
    'coverage',
    'dist/',
    'esm/',
    'node_modules',
    '.coveralla.yml',
    '.editorconfig',
    '.eslintignore',
    '.eslintrc',
    '.gitignore',
    '.prettierrc',
    '.travis.yml',
    'jest.config.js',
    'package.json',
    'package.lock.json',
    'Readme.md',
    'tsconfig.json'
  ]
}
```

### Jest Package json Setup

- **test** berfungsi untuk menjalankan `TDD Testing` hanya untuk sekali di jalankan
- **test:watch** berfungsi untuk menonton file `TDD Testing` mana yang sedang mengalami perubahan, sehingga `TDD Testing` akan berjalan secara otomatis tanpa harus menjalankan nya berulangkali
- **test:coverage** berfungsi untuk melakukan `TDD Testing + Coverage` dari `package library` yang sudah di buat
- **test:coveralls** berfungsi untuk melakukan `TDD Testing` ketika melakukan `automation testing` menggunakan `travis ci`

```json
   "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "test:coverage": "jest --coverage",
    "test:coveralls": "jest --coverage && coveralls < coverage/lcov.info"
  }
```

### Jest Test Success

**brikut ini adalah contoh gambar**, tampilan ketika berhasil melakukan `TDD Testing` dengan menggunakan perintah `npm run test`

<img src="https://imgur.com/XUr4SIW.png" alt="logo_jest"/>

### Jest Watch Test Success

**brikut ini adalah contoh gambar**, tampilan ketika berhasil melakukan `TDD Testing` dengan menggunakan perintah `npm run test:watch`

<img src="https://i.imgur.com/KRDOJBA.png" alt="logo_jest_watch"/>

### Jest Coverage Test Success

**brikut ini adalah contoh gambar**, tampilan ketika berhasil melakukan `TDD Testing` dengan menggunakan perintah `npm run test:coverage`

<img src="https://i.imgur.com/iVmNIg1.png" alt="logo_jest_coverage"/>
