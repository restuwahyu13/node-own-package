## Eslint Config Basic

### TABLE OF CONTENT

- [Get Started](#get-started)
  - [Eslint Introduction](#Eslint-Introduction)
  - [Eslint Config Options](#Eslint-Config-Options)
  - [Eslint JavaScript Config](#Eslint-JavaScript-Config)
  - [Eslint TypeScript Config](#Eslint-TypeScript-Config)

### Eslint Introduction

**Eslint** adalah sebuah tools untuk melakukan linting/linter dimana ini adalah sebuah metode untuk menganalisis sebuah code program untuk menghindari dari kesalahan dan bugs, dari setiap baris kode yang telah di tuliskan.

### Eslint Config Options

- **parserOptions** berfungsi untuk menentukan opsi apa yang akan diterapkan untuk eslint parser
- **parser** berfungsi untuk menentukan kompiler parser apa yang akan digunakan
- **extends** berfungsi untuk memperluas config apa yang akan di gunakan
- **plugins** berfungsi untuk menyetel plugin mana yang akan di gunakan
- **env** berfungsi untuk menentukan environment apa yang akan di gunakan
- **settings** berfungsi untuk menambahkan pengaturan tambahan
- **rules** berfungsi untuk memberikan rules apa yang akan di gunakan bisa berupa error, warning atau tidak sama sekali

#### Eslint JavaScript Config

```json
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:node/recommended", "plugin:jest/recommended"],
  "env": {
    "node": true,
    "jest/globals": true
  },
  "settings": {
    "jest": {
      "version": 26
    }
  },
  "rules": {
    "semi": 0
  }
}
```

#### Eslint TypeScript Config

```json
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "node/no-unsupported-features/es-syntax": 0,
    "node/no-missing-import": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
  "env": {
    "node": true,
    "jest/globals": true
  },
  "settings": {
    "jest": {
      "version": 26
    }
  }
}
```

##

<p align="right">
  <b><a href="#Eslint-Config-Basic">BACK TO TOP</a></b>
</p>
