## Package json Structure

### TABLE OF CONTENT

- [Get Started](#get-started)
  - [Package Json Introduction](#Package-Json-Introduction)
  - [Package Json Config Options](#Package-Json-Config-Options)
  - [Package Json Script Options](#Package-Json-Script-Options)
  - [Package Json Nodejs JavaScript](#Package-Json-Nodejs-JavaScript)
  - [Package Json Nodejs TypeScript](#Package-Json-Nodejs-TypeScript)

### Package Json Introduction

**Package.json** adalah sebuah config file yang berisi kumpulan perintah, deskripsi, inisialisasi module atau apapun yang terkait dengan aplikasi atau package library yang ingin di buat.

### Package Json Config Options

- **name** berfungsi untuk memberikan nama dari aplikasi atau package library
- **version** berfungsi untuk memberikan versi dari aplikasi atau package library
- **description** berfungsi untuk memberikan deskripsi tentang aplikasi atau package library
- **main** berfungsi sebagai titik masuk dari aplikasi atau package library
- **scripts** berfungsi sebagai kumpulan perintah untuk mejalankan aplikasi atau package library
- **repository** berfungsi sebagai tautan url repository dari aplikasi atau package library
- **homepage** berfungsi sebagai tautan url homepage dari aplikasi atau package library
- **bugs** berfungsi sebagai tautan url issue terkait dari aplikasi atau package library yang telah di bua
- **license** berfungsi sebagai aturan dan hak cipta terkait dari aplikasi atau package library
- **keywords** berfungsi sebagai kata pencarian dari aplikasi atau package library
- **dependencies** berfungsi sebagai inisialisasi module yang telah di install, yang nantinya akan di gunakan di lingkungan production atau development
- **devDependencies** berfungsi sebagai inisialisasi module yang telah di install, yang nantinya akan di gunakan di lingkungan development
- **peerDependencies** berfungsi sebagai inisialisasi module ketergantungan dari module lain yang telah di install, yang nantinya akan di gunakan di lingkungan production atau development
- **types** befungsi untuk menampilkan type definination dari package library
- **module** berfungsi untuk menentukan jenis type module apa yang akan di gunakan saat membuat aplikasi atau package library
- **files** berfungsi sebagai tempat dimana titik masuk dari aplikasi atau package library
- **engines** berfungsi untuk menentukan versi nodejs dan npm yang boleh di gunakan, saat menggunakan aplikasi atau package library

### Package Json Script Options

- #### Nodejs JavaScript Script Options

  - **test** berfungsi untuk menjalankan TDD Testing hanya sekali di jalankan
  - **test:watch** berfungsi untuk menjalankan TDD Testing berungkali di jalankan jika terjadi perubahan
  - **test:coverage** berfungsi untuk menjalankan Coverage Test
  - **test:coveralls** berfungsi untuk menjalankan Coverall Test
  - **lint** berfungsi untuk menjalankan analisis code menggunakan eslint
  - **lint:fix** berfungi untuk menjalankan analisis code dan merapihkan code, menggunakan eslint dan prettier
  - **format** berfungsi untuk merapihkan code menggunakan prettier

- #### Nodejs TypeScript Script Options
  - **build** berfungsi untuk menjalankan build:cjs dan build:esm secara bersamaan
  - **build:cjs** berfungsi untuk mengcompile javascript code menjadi module bundle ke commonjs module
  - **build:esm** berfungsi untuk mengcompile javascript code mejadi module bundle ke esm module
  - **clean:cjs** berfungsi untuk menghapus file compiler commonjs module, ketika melakukan compiler ulang
  - **clean:esm** berfungsi untuk menghapus file compiler esm module, ketika melakukan compiler ulang
  - **test** berfungsi untuk menjalankan TDD Testing hanya sekali di jalankan
  - **test:watch** berfungsi untuk menjalankan TDD Testing berungkali di jalankan jika terjadi perubahan
  - **test:coverage** berfungsi untuk menjalankan Coverage Test
  - **test:coveralls** berfungsi untuk menjalankan Coverall Test
  - **lint** berfungsi untuk menjalankan analisis code menggunakan eslint
  - **lint:fix** berfungi untuk menjalankan analisis code dan merapihkan code, menggunakan eslint dan prettier
  - **format** berfungsi untuk merapihkan code menggunakan prettier

### Package Json Nodejs JavaScript

```json
{
  "name": "node-math-js",
  "version": "0.0.1",
  "description": "node-math-js is basic operation for calculation number",
  "main": "index.js",
  "types": "./index.d.ts",
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
    "test:coverage": "jest --coverage",
    "test:coveralls": "jest --coverage && coveralls < coverage/lcov.info",
    "lint": "eslint \"{src/libs,__tests__}/**/*.{ts,test.ts,spec.ts}\"",
    "lint:fix": "eslint \"{src/libs,__tests__}/**/*.{ts,test.ts,spec.ts}\" --fix",
    "format": "prettier \"{src/libs,__tests__}/**/*.{ts,test.ts,spec.ts}\" --check --write"
  },
  "author": "restuwahyu13",
  "repository": "https://github.com/techsoft705/math-operations",
  "homepage": "https://github.com/techsoft705/math-operations#readme",
  "bugs": "https://github.com/techsoft705/math-operations/issues",
  "license": "MIT",
  "engines": {
    "node": ">=10.0.0",
    "npm": ">=6.14.8"
  },
  "keywords": ["math calclutation", "math operation", "math basic"],
  "devDependencies": {
    "@types/jest": "^26.0.16",
    "babel-eslint": "^10.1.0",
    "coveralls": "^3.1.0",
    "eslint": "^7.14.0",
    "eslint-plugin-jest": "^24.1.3",
    "eslint-plugin-node": "^11.1.0",
    "husky": "^4.3.0",
    "jest": "^26.6.3",
    "lint-staged": "^8.2.1",
    "prettier": "^2.2.1"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.ts": ["npm run lint:fix", "npm run format", "git add"]
  }
}
```

### Package Json Nodejs TypeScript

```json
{
  "name": "node-math-ts",
  "version": "0.0.1",
  "description": "node-math-ts is basic operation for calculation number",
  "main": "./dist/index.js",
  "module": "./esm/index.js",
  "types": "./dist/index.d.ts",
  "files": [
    "/dist/**",
    "/esm/**"
  ],
  "scripts": {
    "build": "npm run build:cjs && npm run build:esm",
    "build:cjs": "npm run clean:cjs && tsc",
    "build:esm": "npm run clean:esm && tsc -m es2015 --outDir esm",
    "clean:cjs": "rimraf dist",
    "clean:esm": "rimraf esm",
    "test": "jest",
    "test:watch": "jest --watchAll",
    "test:coverage": "jest --coverage",
    "test:coveralls": "jest --coverage && coveralls < coverage/lcov.info",
    "lint": "eslint \"{src/libs,__tests__}/**/*.{ts,test.ts,spec.ts}\"",
    "lint:fix": "eslint \"{src/libs,__tests__}/**/*.{ts,test.ts,spec.ts}\" --fix",
    "format": "prettier \"{src/libs,__tests__}/**/*.{ts,test.ts,spec.ts}\" --check --write"
  },
  "author": "restuwahyu13",
  "repository": "https://github.com/techsoft705/node-math",
  "homepage": "https://github.com/techsoft705/node-math#readme",
  "bugs": "https://github.com/techsoft705/node-math/issues",
  "license": "MIT",
  "engines": {
    "node": ">=10.0.0",
    "npm": ">=6.14.8"
  },
  "keywords": [
    "math calclutation",
    "math operation",
    "math basic"
  ],
  "devDependencies": {
    "@types/jest": "^26.0.16",
    "@types/node": "^14.14.10",
    "@typescript-eslint/eslint-plugin": "^4.9.1",
    "@typescript-eslint/parser": "^4.9.1",
    "coveralls": "^3.1.0",
    "eslint": "^7.15.0",
    "eslint-plugin-jest": "^24.1.3",
    "eslint-plugin-node": "^11.1.0",
    "husky": "^4.3.5",
    "jest": "^26.6.3",
    "lint-staged": "^8.2.1",
    "prettier": "^2.2.1",
    "rimraf": "^3.0.2",
    "ts-jest": "^26.4.4",
    "typescript": "^4.1.2"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.ts": [
      "npm run lint:fix",
      "npm run format",
      "git add"
    ]
  }
}
```

##

<p align="right">
  <b><a href="#Package-json-Structure">BACK TO TOP</a></b>
</p>
