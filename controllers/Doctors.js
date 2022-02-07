const Doctor = require("../models/Doctors")
const constants = require('../config/constants');

// Add or create doctor (Method 1)

/* exports.addDoctor =  (req, res, next) => {
    const doctor =  new Doctor({
        name:req.body.name,
        doctorId:req.body.doctorId,
        mobileno: req.body.mobileno,
        speciality: req.body.speciality,
        gender: req.body.gender,    
    })
    doctor.save()
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
// Add or create Doctor (method 2)

        exports.addDoctor = async(req, res, next) => {
            try {
                const addDoctor = new Doctor(req.body);
                const createdoctor = await addDoctor.save();
                res.status(201).send(createdoctor);
        
            } catch (err) {
                res.status(400).send(err);
            }
        }

       exports.singleDoctor = async (req, res) => {
            try {
                const _id = req.params.id;
                const singleDoctor = await Doctor.findById(_id);
                if (!singleDoctor) {
                    return res.status(404).send();
                } else {
                    res.send(singleDoctor);
                }
            }
            catch (err) {
                res.send(err);
            }
        } 


// Get all Doctors
exports.allDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.find();
       res.json(doctor);
       //res.send(doctor);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ err: true, msg: err.message });
    }
};

exports.getAppointmentList = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({
            doctorId: req.params.doctorId
        });

        if (!doctor) {
            throw new Error('There is no appointment for this Doctor Today');
        }

        res.json({ err: false, doctor });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ err: true, msg: String(err) });
    }
}; 

// Delete doctor by Id
exports.deleteDoctor = async (req, res, next) => {
    try {
        const deleteDoctor = await Doctor.findByIdAndRemove(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.status(200).send(deleteDoctor);

    } catch (e) {
        res.status(500).send(e);
    }
}
    

// Update Doctor by Id
exports.updateDoctor = async (req, res, next) => {
    try {
        const _id = req.params.id;

        const updateDoctor = await Doctor.findByIdAndUpdate(_id, req.body, {
            new: true

        });

        res.status(200).send(updateDoctor);

    } catch (e) {
        res.status(400).send(e);
    }

}

