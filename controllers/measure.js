const Measure = require('../models/measures')

function getMeasure(req,res)
{
    let datoId = req.params.datoId

    Measure.findById(datoId,(err,dato)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!dato) return res.status(404).send({message:`El producto No existe`})

        res.status(200).send({ dato })

    })
}

function getMeasures(req,res)
{
    Measure.find({},(err,datos)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!datos) return res.status(404).send({message:`No hay datos`})
        res.status(200).send({ datos })
    })
}

function saveMeasure(req,res)
{
    console.log('POST /api/dato')
    console.log(req.body)

    let dato = new Measure()
    
    dato.valor = req.body.valor
    dato.category = req.body.category

    dato.save((err,datoStored)=>{
        if(err) return res.status(500).send({message:`Error al salvar en la base de datos :${err}`})
        res.status(200).send({dato:datoStored})
    })
}

function updateMeasure(id)
{

}

function deleteMeasure(id)
{
    
}

module.exports ={
    getMeasure,
    getMeasures,
    updateMeasure,
    saveMeasure,
    deleteMeasure
}
        

        