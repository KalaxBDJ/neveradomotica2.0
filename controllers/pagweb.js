const Measure = require('../models/measures')

async function getAllMeasures(req,res)
{
    const measures = await Measure.find({},(err,datos)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!datos) return res.status(404).send({message:`No hay datos`})
    })
    
    res.render('index',{
        measures
    })
}

module.exports =
{
    getAllMeasures
}