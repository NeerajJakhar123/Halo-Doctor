const mongoose = require("mongoose")
const constants = require('../config/constants');
const express = require("express")

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  speciality: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    enum: Object.values(constants.DOCTOR_STATUS),
    default: constants.DOCTOR_STATUS.ACTIVE
},
  doctorId: {
    type: String,
    required: true,
    unique:true
  },

  mobileno: {
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  }
})



module.exports = mongoose.model("Doctor", doctorSchema)



