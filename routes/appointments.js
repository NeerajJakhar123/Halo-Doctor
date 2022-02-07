const express = require("express")
const router = express.Router()
const appointments = require("../controllers/appointments")
const mongoose = require("mongoose")

const {
  allappointments,
  addappointment,
  singleappointment,
  deleteappointment,
  updateappointment

} = require('../controllers/appointments');


router.get('/', allappointments)
//router.get('/:PatientId', singleappointment)
router.get('/:id', singleappointment)
router.post('/', addappointment)
router.delete('/:id', deleteappointment)
router.patch('/:id', updateappointment)



module.exports = router