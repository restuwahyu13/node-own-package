## Prettier Config Basic

### TABLE OF CONTENT

- [Get Started](#get-started)
  - [Prettier Introduction](#Prettier-Introduction)
  - [Prettier Config Options](#Prettier-Config-Options)
  - [Prettier Config](#Prettier-Config)

### Prettier Introduction

**Prettier** adalah sebuah tools yang biasa di gunakan untuk merapihkan code agar terlihat lebih rapih dari code yang sebelumnya dan tidak berantakan

### Prettier Config Options

- **bracketSpacing** berfungsi untuk memberikan jarak antar bracket
- **useTabs** berfungsi untuk menyetel indent style ke tab
- **trailingComma** berfungsi untuk memberikan koma di akhir variable
- **quoteProps** berfungsi untuk menambahkan tanda kutip pada sebuah object
- **singleQuote** berfungsi untuk mengganti kutip 2 menjadi kutip 1
- **proseWrap** berfungsi untuk melipat code, jika code yang anda tulis melebihi dari ambang batas yang di tentukan
- **printWidth** berfungsi untuk memberikan ambang batas kapan code harus di lipat
- **semi** berfungsi untuk memberikan titik koma di akhir variable

### Prettier Config

```json
{
  "bracketSpacing": true,
  "useTabs": true,
  "trailingComma": "none",
  "quoteProps": "as-needed",
  "singleQuote": true,
  "proseWrap": "preserve",
  "printWidth": 120,
  "semi": false
}
```

##

<p align="right">
  <b><a href="#Prettier-Config-Basic">BACK TO TOP</a></b>
</p>
