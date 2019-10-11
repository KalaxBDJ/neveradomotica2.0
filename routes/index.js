const express = require('express')
const measureCtrl = require('../controllers/measure')
const api = express.Router()



api.get('/mediciones',measureCtrl.getMeasures)
api.get('/mediciones/:datoId',measureCtrl.getMeasure)
api.post('/mediciones',measureCtrl.saveMeasure)
api.put('/mediciones/:dataId',measureCtrl.updateMeasure)
api.delete('/mediciones/:dataId',measureCtrl.deleteMeasure)

module.exports = api