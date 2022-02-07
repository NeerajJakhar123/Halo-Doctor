const express = require("express")
const router = express.Router()
const  doctor = require("../controllers/Doctors")
const mongoose = require("mongoose")

const {
  addDoctor,
  getAppointmentList,
  allDoctor,
  singleDoctor,
  deleteDoctor,
  updateDoctor
  } = require('../controllers/Doctors');


  
  router.get('/', allDoctor)
  router.get('/:id', singleDoctor)
  router.get('/:doctorId', getAppointmentList)
  router.post('/', addDoctor)
  router.delete('/:id', deleteDoctor)
  router.patch('/:id', updateDoctor)
  
  module.exports = router






