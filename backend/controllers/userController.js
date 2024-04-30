const User = require('../models/userModel')




const getUSer = async (req, res) => {

    const users = await User.find({}, {"__v" : 0 , 'password' :false , })
    res.status(200).json(users)
  
}

const getUserById =  async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    }else {
      res.status(404).send('User not found');
    }
}

const getUserByEmail = async (req, res) => {

  
    const user = await User.findOne({email : req.body.email})
    if (user) {
      res.json(user);
    }
    else {
      res.status(404).send('User not found');
    }
}

const getEmailAndRole = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id).select('email , role');
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
}



module.exports = {
    getUSer,
    getUserById,
    getUserByEmail,
    getEmailAndRole
}