
const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

mongoose.connect(config.mondodbURL,{useUnifiedTopology: true,useNewUrlParser: true },(err,res)=>{
    if(err)throw err
    console.log('Se ha establecido con exito la conexión a la base de Datos')

    app.listen(config.port,()=>{
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })

})

