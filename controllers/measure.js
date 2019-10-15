const Measure = require('../models/measures')

function getMeasure(req,res)
{
    let dataId = req.params.dataId

    Measure.findById(dataId,(err,dato)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!dato) return res.status(404).send({message:`La medición no existe`})

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

function updateMeasure(req,res)
{
    let update = req.body
    let dataId = req.params.dataId

    Measure.findOneAndUpdate(dataId,update,(err,dato)=>{
        if(err) return res.status(500).send(`Error al actualizar la medición : ${err}`)
        if(!dato) return res.status(500).send(`No se encontro alguna medición con el id:${dataId}`)
        res.status(200).send('La medición se Actualizo con exito')
    })
}

function deleteMeasure(req,res)
{
    let dataId = req.params.dataId

    Measure.findByIdAndDelete(dataId,(err,dato)=>{
        if(err) return res.status(500).send({message:`Error al borrar la medición ${err}`})
        if(!dato) return res.status(500).send({message:`No se encontro la medición con id : ${dataId}`})
        res.status(200).send({message:`La medición con id: ${dataId} , Ha sido borrada con exito`})
    })
}

module.exports ={
    getMeasure,
    getMeasures,
    updateMeasure,
    saveMeasure,
    deleteMeasure
}
        

        