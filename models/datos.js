'Use Strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = Schema({
    valor: {type:Number,default:0},
    category:{type:String,enum:['temperatura','peso','humedad']}

})

module.exports = mongoose.model('datos',dataSchema)
