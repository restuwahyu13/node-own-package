## Editor Config Basic

- **root** berfungsi untuk menyeletel ke settingan default
- **indent_style** befungsi untuk memilih style apa yang mau digunakan untuk indent bisa space atau tab
- **indent_size** berfungsi untuk memberikan nilai indent yang digunakan bisa space atau tab

```text
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# space indentation
[*.js]
indent_style = tab
indent_size = 2

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under libs directory
[libs/**.js]
indent_style = tab
indent_size = 2

# Indentation override for all JS under app-dev directory
[app-dev/**.js]
indent_style = tab
indent_size = 2

# Indentation override for all JS under __tests__ directory
[__tests__/**.{spec.js, test.js}]
indent_style = tab
indent_size = 2

# Indentation override for all JS under tests directory
[tests/**.{spec.js, test.js}]
indent_style = tab
indent_size = 2
```

##

<p align="right">
  <b><a href="#Editor-Config-Basic">BACK TO TOP</a></b>
</p>
