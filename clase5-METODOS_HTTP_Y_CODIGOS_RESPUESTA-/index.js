<!-- INSTALACIONES: -->
  <!-- npm install express --save -->     <!-- npm i express -S -->
  <!-- npm i body-parser -S -->
  <!-- npm i --devDependencies nodemon --> <!-- npm i -D nodemon -->
<!-- ------------------------------------------------ -->
  <!-- LINK: https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol -->
  <!-- MÉTODOS BÁSICOS:
    <!-- get {pedimos datos al servidor},-->
                    <!--post {enviamos datos al servidor},-->
                   <!-- put {Actualización de un recurso, cambio de nombre},-->
                   <!-- delete {} -->
  <!--CÓDIGOS RESPUESTA: -->
    <!-- 100: Informativo -->
    <!-- 200: Todo ha ido bien despues de un get o un post -->
    <!-- 300: Hay un reedirección de una url a otra -->
    <!-- 400: No existe el recuerso en el servidor -->
    <!-- 500: Error en el servidor -->
  <!--CABECERAS:-->
      <!--cache-->
      <!--autorizado recurso-->
      <!--cliente usando-->

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
