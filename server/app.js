const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/temperature',(req,res)=>{
    res.status(200).send({temperature:[]})
})

app.get('/api/temperature/:temperatureId',(req,res)=>{

})

app.post('/api/temperature',(req,res)=>{
    console.log(req.body)
    res.status(404).send({message:'La temperatura se ha subido con exito'})
})

app.put('/api/temperature/:temperatureId',(req,res)=>{

})

app.delete('/api/temperature/:temperatureId',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
})