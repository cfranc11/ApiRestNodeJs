<!-- INSTALACIONES: -->
  <!-- npm install express --save -->     <!-- npm i express -S -->

'use strict'   <!-- Manera de realizar buenas prácticas, variables -->

const express = require('express')

const app = express()

app.listen(3000, () => {
  console.log("API REST corriendo en htpp://localhost:3000")
})
