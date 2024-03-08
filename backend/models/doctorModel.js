const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    address: {
        type: String,
    },

    specialization: {
        type: String,
    },

    phoneNumber : {
        type: String,
    },

    gender : {
        type: String,
        enum : ['Male' , 'Female']
    },
    role : {
        type: String,
        enum : ['Doctor'],
        default : 'Doctor'
    },

})

module.exports = mongoose.model('Doctor', doctorSchema);