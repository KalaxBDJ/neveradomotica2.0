'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('../routes/index')
const path = require('path')
const morgan = require('morgan')


app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'../public')))

app.use('/',api)
//app.set('views')
//app.set('view engine','ejs')



module.exports = app