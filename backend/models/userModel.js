const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		}
    },

    password: {
        type: String,
        required: true,
        minlength: 4
    },

    role: {
        type: String,
        enum: ['User', 'Admin', 'Master' , 'Doctor' ],
        default: 'User'
    }

})

module.exports = mongoose.model('User', userSchema);