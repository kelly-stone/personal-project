const path = require('path') 
// const multer = require('multer')
// const ejs = require('ejs')

const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
//try ejs view engine as well for upload image
// server.set('view engine', 'ejs')

// Routes

server.use('/', userRoutes)

module.exports = server