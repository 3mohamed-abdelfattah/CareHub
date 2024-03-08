//make `CheckAdmin` function available to other files
const User = require('../models/userModel');
const Doctor = require('../models/doctorModel');

const CheckAdmin = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(user.role !== 'Admin' && user.role !== 'Master'){
        return res.status(403).send('You are not authorized to perform this action');
    }
    next();
}

module.exports = CheckAdmin;