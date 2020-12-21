## Create Your Owner Package Libray

**Berikut** ini adalah tutorial step by step panduan cara membuat **Package Library** untuk `Nodejs Application` menggunakan `TypeScript` dan `JavaScript`, semoga dengan adanya tutorial ini anda dapat membuat **Package Library** anda sendiri, yang nantinya bisa anda gunakan sendiri atau anda bisa bagikan kepada orang lain.

### Table Of Content

- [Get Started](#get-started)
  - [Setup Package Library](https://github.com/restuwahyu13/node-own-package/blob/main/content/Setup_Application.md)
  - [NPM Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/NPM_Setup.md)
  - [Travis CI Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/CI_Setup.md)
  - [Coveralls Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/Coveralls_Setup.md)
  - [Prettier Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/Prettier_Setup.md)
  - [Jest Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/Jest_Setup.md)
  - [Eslint Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/Eslint_Config.md)
  - [Editor Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/Editor_Config.md)
  - [TypeScript Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/TypeScript_Setup.md)
  - [Package JSON Introduction](https://github.com/restuwahyu13/node-owner-package/blob/main/content/Package_Structure.md)
  - [Different Package Versions](https://github.com/restuwahyu13/node-owner-package/blob/main/content/DPV.md)

### Different Library Packages

- **Nodejs JavaScript Package Library** jika anda membuat package library menggunakan `Javascript`, package library tersebut hanya bisa di jalankan di module commonjs saja tidak bisa di jalankan menggunakan module esm module

```javascript
const { addition } = require('node-math')
const output = addition(8, 2)
console.log(output)
```

- **Nodejs TypeScript Package Library** jika anda membuat package library menggunakan `Typescript`, package library tersebut bisa di jalankan di module commonjs dan esm module

```typescript
const { addition } = require('node-math-ts')
const output = addition(8, 2)
console.log(output)
```

```typescript
import { addition } from 'node-math-ts'
const output = addition(8, 2)
console.log(output)
```

### Challenge From Me

Silahkan pamerkan `package library` anda setelah mengikuti tutorial yang saya berikan ini, untuk menginspirasi teman - teman yang lainnya, silahkan clone repository berikut ini, kemudian taruh `package library` yang sudah anda buat di `modules folder`, sesuai dengan type `package library` yang telah anda buat, untuk `readmenya` silahkan ikuti contoh `package library` yang sudah ada sebelumnya.

### Author

- **[Restu Wahyu Saputra](https://github.com/restuwahyu13)**
