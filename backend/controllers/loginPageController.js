const User = require('../models/userModel')
const generateTokenAndSetCookie = require('../utils/generateToken.js')




const loginPage = async (req, res) => {
    const { email, password } = req.body;
  
    //check if email and password are provided
    if (!(email && password)) {
      return res.status(400).send('All inputs are required');
    }
  
    const userData = await User.findOne({email : email} , {__v : 0 , updatedAt : 0 , createdAt : 0 })
  
    //check if user exists in the database with this email
    if(!userData){
      return res.status(402).send('user not found with this email')
    }
  
    generateTokenAndSetCookie(userData._id , res)
  
    if (userData.password === password) {
      res.json(userData);
    } else {
      res.status(401).send('Invalid Password');
    }
}

const registerationPage =  async (req, res) => {
    const { firstname, lastname, email, password , passwordAgin , role } = req.body;
    
    const exist = await User.findOne ({email : email })

    if(exist){
      return res.status(400).send("Email Already Exist")
    }
  
    if(password !== passwordAgin){
      return res.status(401).send('passwords do not match')
    }
  
    const newUser = new User({
      firstname,
      lastname,
      email,
      password ,
      role,
    });
  
    //generateTokenAndSetCookie(newUser._id , res)
      try{
        await newUser.save();
      }
      catch(err){
        return res.status(400).send(err.message)
      }
    
      res.json(newUser)
  
}

module.exports = {
    loginPage,
    registerationPage
}