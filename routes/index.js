const express = require('express')
const measureCtrl = require('../controllers/measure')
const api = express.Router()



api.get('/mediciones',measureCtrl.getMeasures)
api.get('/mediciones/:dataId',measureCtrl.getMeasure)
api.post('/mediciones',measureCtrl.saveMeasure)
api.put('/mediciones/:dataId',measureCtrl.updateMeasure)
api.delete('/mediciones/:dataId',measureCtrl.deleteMeasure)
api.get('/create',measureCtrl.fakeMeasure)

module.exports = api