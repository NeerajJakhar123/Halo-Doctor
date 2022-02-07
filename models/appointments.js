const mongoose = require("mongoose")
const express = require("express")

const appointmentSchema = new mongoose.Schema({
  Patientname: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  PatientId: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  Age: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  mobileno: {
    type: String,
    required: true
  },
  doctorname: {
    type: String,
    required: true
},
  doctorId: {
      type: String,
      required: true
  },
  gender:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Appointment", appointmentSchema)