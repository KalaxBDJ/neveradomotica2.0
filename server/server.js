const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config')
const bodyParser = require('body-parser')
const Dato = require('../models/datos')

//TODO: Refactorizar Codigo para Proteger las Rutas


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/dato',(req,res)=>{

    Dato.find({},(err,datos)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!datos) return res.status(404).send({message:`El producto No existe`})
        res.status(200).send({ datos })
    })
    
})

app.get('/api/dato/:datoId',(req,res)=>{
    let datoId = req.params.datoId

    Dato.findById(datoId,(err,dato)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!dato) return res.status(404).send({message:`El producto No existe`})

        res.status(200).send({ dato })

    })
})

app.post('/api/dato',(req,res)=>{
    console.log('POST /api/dato')
    console.log(req.body)

    let dato = new Dato()
    
    dato.valor = req.body.valor
    dato.category = req.body.category

    dato.save((err,datoStored)=>{
        if(err) return res.status(500).send({message:`Error al salvar en la base de datos :${err}`})
        res.status(200).send({dato:datoStored})
    })
})

app.put('/api/dato/:dataId',(req,res)=>{

})

app.delete('/api/dato/:dataId',(req,res)=>{

})


mongoose.connect(config.mondodbURL,{useUnifiedTopology: true,useNewUrlParser: true },(err,res)=>{
    if(err)throw err
    console.log('Se ha establecido con exito la conexión a la base de Datos')

    app.listen(config.port,()=>{
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })

})

