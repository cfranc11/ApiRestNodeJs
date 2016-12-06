'use strict'

<!--Lo usaremos para encriptar el usuario y darle seguridad-->
      <!-- npm i -S bcrypt-nodejs -->

<!-- Instalamos otra libreria -->
      <!-- npm i -S crypto -->

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')  <!-- encriptar -->
const crypto = require('crypto')

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  avatar: String,
  password: { type: String, select: false},  <!-- select falso (no envía contraseña al cliente)-->
  signupDate: { type: Date, default: Date.now()},   <!-- Nos da la fecha de ese momento-->
  lastLogin: Date
})

<!--Funciones que se pueden ejecutar antes o despues de ejecutar la base de datos-->
UserSchema.pre('save', (next) => {
  let user = this
  if (!user.isModified('password')) return next()  <!-- Si el usuario no ha modificado la contraseña-->

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})


UserSchema-methods.gravatar = function(){
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}
