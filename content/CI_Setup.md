## CI Setup Package Library

### TABLE OF CONTENT

- [Get Started](#get-started)
  - [Travis CI Introduction](#Travis-CI-Introduction)
  - [Travis CI Config Basic](#Travis-CI-Config-Basic)
  - [Travis CI Landing Page](#Travis-CI-Landing-Page)
  - [Travis CI Register-Account](#Travis-CI-Register)
  - [Travis CI Login Account](#Travis-CI-Login)
  - [Travis CI Autorization Login/Register](#Travis-CI-Autorization-Login/Register)
  - [Travis CI Autorization Confirmation](#Travis-CI-Autorization-Confirmation)
  - [Travis CI Autorization Success](#Travis-CI-Autorization-Success)
  - [Travis CI Select Repository](#Travis-CI-Select-Repository)
  - [Travis CI Select Repository Success](#Travis-CI-Select-Repository-Success)
  - [Travis CI Automation Testing Running](#Travis-CI-Automation-Testing-Running)
  - [Travis CI Automation Testing Error](#Travis-CI-Automation-Testing-Error)
  - [Travis CI Automation Testing Success](#Travis-CI-Automation-Testing-Success)
  - [Travis CI Badge](#Travis-CI-Badge)

### Travis CI Introduction

**Travis CI** adalah kepanjangan dari `Continuous integration` yaitu sebuah tools untuk melakukan `Automation Testing` pada sebuah project secara otomatis, sesuai dengan apa yang telah di intruksikan melalui sebuah file config, yang bernama `.travis.yml`

### Travis Config Basic

- **language** berfungsi untuk memilih bahasa pemerograman apa yang akan digunakan, untuk melakukan automation testing
- **node** berfungsi untuk memilih versi nodejs yang mau digunakan, untuk melakukan automation testing
- **before_scripts** berfungsi untuk menjalankan sebuah fungsi yang diberikan sebelum semua script dijalankan, sebelum melakukan automation testing
- **scripts** berfungsi untuk menjalankan sebuah fungsi yang diberikan, untuk melakukan automation testing
- **cache** berfungsi untuk membuat cache pada package library ketika melakukan automation testing
- **os** berfungsi untuk memilih sistem operasi mana yang akan digunakan untuk melakukan automation testing
- **jobs** berfungsi untuk melakukan sebuah tindakan yang diberikan saat melakukan automation testing sedang berjalan atau sudah berakhir

```yml
language: node_js

node_js:
  - node

script:
  - npm install

after_script:
  - npm run test
  - npm run test:coveralls

cache:
  npm: true
  packages: true

os:
  - windows
  - linux

jobs:
  fast_finish: true
```

### Travis CI Landing Page

**berikut ini adalah gambar**, tampilan awal landing page dari website `travis ci`

<img src="https://imgur.com/XTBwt8M.png" alt="logo_travis_landing"/>

### Travis CI Register Account

**berikut ini adalah gambar**, ketika kita ingin melakukan pendaftaran account baru di `travis ci`

<img src="https://imgur.com/mrvCjPG.png" alt="logo_signup_account"/>

### Travis CI Login Account

**berikut ini adalah gambar**, ketika kita ingin masuk kedalam `travis ci`

<img src="https://imgur.com/9Q8asrU.png" alt="logo_sign_account"/>

### Travis CI Autorization Login/Register

**berikut ini adalah gambar**, ketika ingin melakukan `autorization` bahwa kita setuju untuk menggunakan `travis ci` baik itu mau masuk atau melakukan pendaftaran ke `travis ci`

<img src="https://imgur.com/XDHlX9z.png" alt="logo_auth_account"/>

### Travis CI Autorization Confirmation

**berikut ini adalah gambar**, untuk mensetujui `autorization` baik itu mau masuk atau melakukan pendaftaran ke `travis ci`

<img src="https://imgur.com/Tivf0s9.png" alt="logo_confirm_auto_account"/>

### Travis CI Autorization Success

**berikut ini adalah gambar**, ketika berhasil melakukan `autorization`, maka nanti akan di arahkan kedalam dashboard dari `travis ci`

<img src="https://imgur.com/rdoFOmo.png" alt="logo_success_auth"/>

### Travis CI Select Repository

**berikut ini adalah gambar**, memilih repository mana yang kita mau lakukan untuk `automation testing` menggunakan `travis ci`

<img src="https://imgur.com/ANyYQj8.png" alt="logo_select_respository"/>

### Travis CI Select Repository Success

**berikut ini adalah gambar**, repository yang berhasil di pilih untuk melakukan `automation testing` menggunakan `travis ci`, perlu di ingat bahwa hanya repository yang memiliki `.travis` saja yang hanya bisa melakukan `automation testing`

<img src="https://imgur.com/wt9rswZ.png" alt="logo_select_repository_success"/>

### Travis CI Automation Testing Running

**berikut ini adalah gambar**, tampilan ketika `automation testing` sedang berjalan

<img src="https://imgur.com/A15NS13.png" alt="logo_auto_testing_run"/>

### Travis CI Automation Testing Error

**berikut ini adalah gambar**, tampilan ketika `automation testing` mengalami kesalahan, biasa nya ini terjadi karena ada kesalahan konfigurasi pada `.travis` atau kesalahan konfigurasi saat melakukan `TDD Testing` pada aplikasi

<img src="https://imgur.com/KXN6Hqv.png" alt="logo_auto_testing_error"/>

### Travis CI Automation Testing Success

**berikut ini adalah gambar**, tampilan ketika `automation testing` sudah berhasil di lakukan, dalam artian `package library` yang kita buat sudah lulus test tanpa adanya masalah.

<img src="https://imgur.com/I9oJLfO.png" alt="logo_auto_testing_success"/>

### Travis CI Badge

**berikut ini adalah gambar**, tampilan cara mengambil badge `build passing` dari `travis ci`, dengan cara mengklik badge icon, yang nanti nya badge icon tersebut akan di gunakan di dalam `README.md`

<img src="https://imgur.com/y3gTxhx.png" alt="logo_badge"/>

##

<p align="right">
  <b><a href="#CI-Setup-Package-Library">BACK TO TOP</a></b>
</p>
