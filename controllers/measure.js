const Measure = require('../models/measures')
const faker = require('faker')
const config = require('../server/config')
const client = require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN)
const{format}= require('timeago.js')

function timeago(timestamp){
    return format(timestamp)
}

function getMeasure(req,res)
{
    let dataId = req.params.dataId

    Measure.findById(dataId,(err,dato)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!dato) return res.status(404).send({message:`La medición no existe`})

        res.status(200).send({ dato })

    })
}

async function getMeasures(req,res)
{
    const ago = []
    await Measure.find({},(err,datos)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición : ${err}`})
        if(!datos) return res.status(404).send({message:`No hay datos`})
        datos.forEach(dato=>{
            ago.push(timeago(dato.created_at))
        })
        res.json(datos,ago)
    })
}

    function saveMeasure(req,res)
{
    console.log('POST /api/dato')
    console.log(req.body)

    let dato = new Measure()
    
    dato.value = req.body.value
    dato.category = req.body.category




    dato.save((err,datoStored)=>{
        if(err) return res.status(500).send({message:`Error al salvar en la base de datos :${err}`})
        if(datoStored.value>=40 && datoStored.category=='temperatura')
        {
            client.calls
            .create({
                url: 'https://8iu6y75trw.000webhostapp.com/voice.xml',
                to: config.toNumber,
                from: config.fromNumber
            })
            .then(call => console.log(call.sid));
        }
        res.status(200).send(datoStored)
    })
}

async function fakeMeasure(req,res)
{
    for(let i = 0;i<2;i++)
    {
        await Measure.create({
            valor: faker.random.number(80),
            category: 'temperatura'
        })
    }

    res.send({message:'Se han Creado 2 Mediciones'})
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
    deleteMeasure,
    fakeMeasure
}
        

        