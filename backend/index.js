const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const mongoose = require('mongoose')

const User = require('./models/userModel')
const Doctor = require('./models/doctorModel')
const CheckAdmin = require('./middleware/functions')

require('dotenv').config() // to use the .env file


const { MongoClient, ObjectId } = require('mongodb');

const PORT = process.env.PORT || 5000
const url = process.env.MONGO_URL
const dbName = "doctors"

mongoose.connect(url).then(()=>{
  console.log('mongodb server start')
})


const app = express()

app.use(express.json()) // to allow the server to read the body of the request

app.use(cors()) // to allow the server to accept requests from the frontend

app.get('/api/users', async (req, res) => {
  const query = req.query
  const limit = query.limit || 10
  const page = query.page || 1
  const skip = (page - 1) * limit

  const users = await User.find({}, {"__v" : 0 , 'password' :false , }).limit(limit).skip(skip)
  res.status(200).json(users)

})

app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (user) {
    res.json(user);
  }else {
    res.status(404).send('User not found');
  }
})

app.post('/api/registeration', async (req, res) => {

  console.log(req.body)

  const { firstname, lastname, email, password , passwordAgin , role } = req.body;
  
  const old = await User.findOne({email : email})
  if(old){
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
    role
  });

    try{
      await newUser.save();
    }
    catch(err){
      return res.status(400).send(err.message)
    }

  
    res.json(newUser)

})

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  //check if email and password are provided
  if (!(email && password)) {
    return res.status(400).send('All inputs are required');
  }

  const userData = await User.findOne({email : email})

  //check if user exists in the database with this email
  if(!userData){
    return res.status(402).send('user not found with this email')
  }

  if (userData.password === password) {
    res.json(userData);
  } else {
    res.status(401).send('Invalid Password');
  }
})


// PATCH endpoint to update a user role by id *** by admin only ***
app.patch('/api/updateRole/:id', CheckAdmin , async (req, res) => {

  const userID = req.params.id;
  const { id , setRole } = req.body;
  if(setRole !== 'Admin' && setRole !== 'User' && setRole !== 'Master'){
    return res.status(400).send('invalid role')
  }
  const user = await User.findById(id);
  if(user){
    user.role = setRole;
    await user.save();
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }

});

// DELETE endpoint to delete a user by id *** by admin only ***
app.delete('/api/delete/:id', CheckAdmin , async (req, res) => {
  const { id } = req.body;
  const userID = req.params.id;


  const user = await User.findById(id);
  if(user){
    await user.deleteOne();
    res.json({message: 'User removed'});
  } else {
    res.status(404).send('User not found');
  }

} );

// PATCH endpoint to update a user by id *** by admin only ***
app.patch('/api/update/:id', CheckAdmin , async (req, res) => {
  const { id, newFirstname, newLastname, newEmail , newPassword , newRole} = req.body;
  
  const userToUpdate = await User.findById(id);
  
  if (userToUpdate)
    {
    if (newFirstname) userToUpdate.firstname = newFirstname;
    if (newLastname) userToUpdate.lastname = newLastname;
    if (newEmail) userToUpdate.email = newEmail;
    if (newRole){
      if(newRole !== 'Admin' && newRole !== 'User' && newRole !== 'Master'){
        return res.status(400).send('invalid role')
      }
      userToUpdate.role = newRole;
    }
    if (newPassword) {
      userToUpdate.password = newPassword;
    }

    await userToUpdate.save();
    res.json(userToUpdate);
    }else {
    return res.status(404).send('User not found');
  }
}); 







// gt all doctors by collection
app.get('/api/doctors/:collection' , async(req , res)=>{
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection(req.params.collection);
      const result = await collection.find({}).toArray();
      res.json(result)
  } finally {
      await client.close();
  }
  
})

// get doctor by id and collection
app.get('/api/doctors/:collection/:id' , async(req , res)=>{
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect();
      const database = client.db(dbName);

      const collection = req.params.collection;
      const id = req.params.id;

      const collectionName = database.collection(collection);
      const result = await collectionName.findOne({_id : new ObjectId(id)})
      
      if(result){
        res.json(result)
      } else {
        res.status(404).send('Doctor not found');
      }

  } finally {
      await client.close();
  }
})

//edit doctor by id and collection
app.patch('/api/doctors/:collection/:id', CheckAdmin, async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Define allowed update fields (adjust as needed)
    const allowedUpdateFields = ['name', 'address', 'phoneNumber'];

    // Extract only the provided update fields from the request body
    const updateData = {};
    for (const field of allowedUpdateFields) {
      if (req.body.hasOwnProperty(field)) {
        updateData[field] = req.body[field];
      }
    }


    await client.connect();
    const database = client.db(dbName);

    const collection = req.params.collection;
    const collectionName = database.collection(collection);

    const { D_id } = req.body;
    if (!D_id) {
      return res.status(400).send('Doctor ID is required');
    }
    
    const findDoctor = await collectionName.findOne({ _id: new ObjectId(D_id) }); 
    if (!findDoctor) {
      return res.status(404).send('Doctor not found');
    }


    const filter = { _id: new ObjectId(D_id) };
    const update = { $set: updateData }; // Update only the provided fields

    const updatedDoctor = await collectionName.findOneAndUpdate(
      filter,
      update,
      { returnOriginal: false }
    );
    
    // Access properties of updatedDoctor after it's fully updated
    res.status(200).json(updatedDoctor);
    

    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});



app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

