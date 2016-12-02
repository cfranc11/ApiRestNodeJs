
<!--INSTALACIONES:-->
  <!-- Instalar homebrew -->
  <!-- $brew install mongodb -->
    <!-- RUN: $mongod -->
    <!-- OPEN: $mongo -->
    <!--VIEW: $ > show dbs -->
  <!-- $install -i -S mongoose -->

'use strict'   <!-- Manera de realizar buenas prácticas, variables -->

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

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
  res.status(200).send({message: 'El producto se ha recibido'})
})

    <!--PETICIÓN PUT, actualización-->
app.put('/api/product/:productId', (req,res) => {

})

    <!--PETICIÓN DELETE, borrar producto de la base de datos-->
app.delete('/api/product/:productId', (req,res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
  <!-- if (err) throw err -->
  if(err){
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(port, function () {
    console.log(`API REST corriendo en htpp://localhost:${port}`)
  })
})
