<!-- INSTALACIONES: -->
  <!-- npm install express --save -->     <!-- npm i express -S -->
  <!-- npm i body-parser -S -->
  <!-- npm i --devDependencies nodemon --> <!-- npm i -D nodemon -->

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
<!-- ------------------------------------------------ -->
  <!-- SE AGREGA A CHROME UNA EXTENSIÓN-->
    <!--JSON Formatter-->
  <!-- DESCARGAR POSTMAN -->
    <!-- LINK: https://www.getpostman.com/ ->>

'use strict'   <!-- Manera de realizar buenas prácticas, variables -->

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

    <!--PETICIÓN GET-->
app.get('/api/product', (req,res) => {
  res.send(200, {products: []})
})

    <!--RUTA GET ÚNICO RECURSO-->
app.get('/api/product/:productId', (req,res) => {

})

    <!--PETICIÓN POST PARA SUBIR LOS PRODUCTOS-->
app.post('/api/product', (req,res) => {
  console.log(req.body)
     <!--res.status(200).send({message: 'El producto se ha recibido'})-->
  res.status(404).send({message: 'El producto no existe'})
})

    <!--PETICIÓN PUT, actualización-->
app.put('/api/product/:productId', (req,res) => {

})

    <!--PETICIÓN DELETE, borrar producto de la base de datos-->
app.delete('/api/product/:productId', (req,res) => {

})

app.listen(port, function () {
  console.log(`API REST corriendo en htpp://localhost:${port}`)
})
