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

<!-- ESCUCHAS O PETICIONES A LA API REST -->
app.get('/hola', (req,res) => {
  res.send({ message: 'Hola Mundo' })
})

app.get('/hola/:name', (req,res) => {
  res.send({ message: `Hola ${req.params.name}!` })
})

app.listen(port, function () {
  console.log(`API REST corriendo en htpp://localhost:${port}`)
})
