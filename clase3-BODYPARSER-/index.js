<!-- INSTALACIONES: -->
  <!-- npm install express --save -->     <!-- npm i express -S -->
  
  <!-- npm i body-parser -S -->
  <!-- npm i --devDependencies nodemon --> <!-- npm i -D nodemon -->

'use strict'   <!-- Manera de realizar buenas prácticas, variables -->

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.listen(port, function () {
  console.log(`API REST corriendo en htpp://localhost:${port}`)
})
