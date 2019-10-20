const express = require('express')
const measureCtrl = require('../controllers/measure')
const webCtrl = require('../controllers/pagweb')
const api = express.Router()




api.get('/mediciones',measureCtrl.getMeasures)
api.get('/mediciones/:dataId',measureCtrl.getMeasure)
api.post('/mediciones',measureCtrl.saveMeasure)
api.put('/mediciones/:dataId',measureCtrl.updateMeasure)
api.delete('/mediciones/:dataId',measureCtrl.deleteMeasure)
api.get('/create',measureCtrl.fakeMeasure)
api.get('/principal',webCtrl.getAllMeasures)


module.exports = api