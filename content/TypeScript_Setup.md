## TypeScript Config Basic

### TABLE OF CONTENT

- [Get Started](#get-started)
  - [TypeScript Introduction](#TypeScript-Introduction)
  - [TypeScript Config Introduction](#TypeScript-Config-Introduction)
  - [TypeScript Tutorial](#TypeScript-Tutorial)
  - [TypeScript Config Options](#TypeScript-Config-Options)
  - [TypeScript Nodejs Config](#TypeScript-Nodejs-Config)

## TypeScript Introduction

**Typescript** adalah bahasa pemerograman yang di kembangkan oleh `Microsoft` yang di buat tepatnya pada tahun 2009, typescript juga sering di sebut sebagai superset nya javascript, dikarenakan semua kode javascript yang anda tuliskan bisa di berjalan di typescript, ada sedikit perbedaan antara javascript dan typescript, typescript full support OOP (Object Oriented Programming) seperti layaknya `Java` atau `C++`, sedangkan javascript tidak full support support OOP (Object Oriented Programming), agar typescript bisa berjalan di browser di butuhkan sebuah `compiler`, anda bisa menggunakan compiler bawaan `Typescript` atau pihak ketiga seperti `Babel`, `Webpack` atau `Rollup`.

### TypeScript Config Introduction

**tsconfig.json** adalah sebuah config file yang berisi kumpulan perintah baik itu untuk mejalankan sebuah aplikasi atau mengcompile aplikasi dari `Typescript` code ke `Javascript` code

### TypeScript Tutorial

jika anda belum pernah mencoba `Typescript` sama sekali, alangkah baiknya anda bisa mengunjungi tutorial berikut ini, yang di tulis oleh mas gugun di link berikut **[ini](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-DenoTheWKWKLand/blob/master/Typescript.md)**, tutorialnya sangat lengkap penjelasan mengenai `Typescript` dan yang pastinya di tulis dengan bahasa indonesia

### TypeScript Config Options

- **outDir** berfungsi sebagai output directory dari aplikasi atau package library
- **module** berfungsi untuk menentukan type module mana yang akan di gunakan saat membuat aplikasi atau package library
- **target** berfungsi untuk menentukan aplikasi atau package library ingin di compile ke javascript ke versi berapa
- **moduleResolution** berfungsi untuk menentukan strategy module saat melakukan compiler file, pada aplikasi atau package library
- **esModuleInterop** berfungsi untuk memaksimalkan kinerja saat menggunakan module commonjs, amd atau umd pada aplikas atau package library
- **downlevelIteration** berfungsi untuk mengkonversi javascript code ke versi yang lebih lama, pada aplikasi atau package library, untuk mendapatkan dukungan fiture yang tidak tersedia di javascript versi yang lebih baru
- **sourceMap** berfungsi untuk mengenerate sourceMaps file sesudah melakukan compiler file, pada aplikasi atau package library yang sudah di buat, untuk keperluan debugging
- **strict** berfungsi untuk mengaktifkan mode ketat pada aplikasi atau package library
- **skipLibCheck** berfungsi untuk melewati pengecekan library saat melakukan compiler file, pada aplikasi atau package library
- **declaration** berfungsi untuk mengenerate type defination untuk masing - masing file, sesudah melakukan compiler file, pada aplikasi atau package library
- **removeComments** berfungsi untuk menghapus semua comment saat melakukan compiler file, pada aplikasi atau package library
- **noImplicitAny** berfungi untuk mengabaikan jenis variable yang tidak memiliki type definition, agar tidak menggunakan type any
- **typeRoots** berfungsi untuk menyetel default root type defination pada aplikasi atau package library
- **include** berfungsi untuk menyertakan file atau directory saat melakukan compiler file, pada aplikasi atau package library
- **exclude** berfungsi untuk mengecualikan file atau directory saat melakukan compiler file, pada aplikasi atau package library

### TypeScript Nodejs Config

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "CommonJS",
    "target": "ES2015",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "downlevelIteration": true,
    "sourceMap": true,
    "strict": false,
    "skipLibCheck": true,
    "declaration": true,
    "removeComments": true,
    "noImplicitAny": true,
    "typeRoots": ["node_modules/@types"]
  },
  "include": ["src/**/*"],
  "exclude": ["esm", "dist", "node_modules", "coverage", "__test__"]
}
```
##

<p align="right">
  <b><a href="#NPM-Package-Library-Setup">BACK TO TOP</a></b>
</p>
