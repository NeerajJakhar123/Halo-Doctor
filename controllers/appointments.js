const Appointment = require("../models/appointments")
const mongoose = require("mongoose")
const appointment = require("../models/appointments")



// Get ALL APPOINTMENTS

exports.allappointments = async (req, res) => {
    try {
        const appointment = await Appointment.find();
         res.json(appointment);
       // res.send(appointment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ err: true, msg: err.message });
    }
};
  // Get Single Appointment (Method 1)
/*exports.singleappointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOne({
            PatientId: req.params.PatientId
        });
 
        if (!appointment) {
            throw new Error('There is no appointment for this Patient');
        }
 
        res.json({ err: false, appointment });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ err: true, msg: String(err) });
    }
}; */


 // Get Single Appointment (Method 2)

exports.singleappointment = async (req, res) => {
    try {
        const _id = req.params.id;
        const singleappointment = await Appointment.findById(_id);
        if (!singleappointment) {
            return res.status(404).send();
        } else {
            res.send(singleappointment);
        }
    }
    catch (err) {
        res.send(err);
    }
}


//Add appointment (method 1)

/*exports.addappointment =  (req, res, next) => {
const appointment =  new Appointment({
    Patientname:req.body.Patientname,
    PatientId:req.body.PatientId,
    Age: req.body.Age,
    Date: req.body.Date,
    Time: req.body.Time,
    Description: req.body.Description,
    mobileno: req.body.mobileno,
    doctorname: req.body.doctorname,
    doctorId: req.body.doctorId,
    gender: req.body.gender,
})
 
appointment.save()
.then(result =>
{
    console.log(result);
    res.status(200).json({
        newAppointment:result
    })
})
.catch(err =>{
console.log(err);
res.status(500).json({
    error:err
})
 
})
} */



// Add or create Appoinment (method 2)

exports.addappointment = async(req, res, next) => {
    try {
        const addappointment = new Appointment(req.body);
        const createappointment = await addappointment.save();
        res.status(201).send(createappointment);

    } catch (err) {
        res.status(400).send(err);
    }
}


 // Delete appointment by Id
exports.deleteappointment = async (req, res, next) => {
    try {
        const deleteappointment = await Appointment.findByIdAndRemove(req.params.id);
        if (!req.params.id) {
            return res.status(404).send()
        }
        res.status(200).send(deleteappointment);

    } catch (e) {
        res.status(500).send(e);
    }
}


// Update appointment by Id
exports.updateappointment = async (req, res, next) => {
    try {
        const _id = req.params.id;

        const updateappointment = await Appointment.findByIdAndUpdate(_id, req.body, {
            new: true

        });

        res.status(200).send(updateappointment);

    } catch (e) {
        res.status(400).send(e);
    }

}

