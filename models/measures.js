'Use Strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const measureSchema = Schema({
    value: {type:Number,default:0},
    category:{type:String,enum:['temperatura','peso']},
    created_at:{type:Date,default:Date.now()}

})

module.exports = mongoose.model('mediciones',measureSchema)
