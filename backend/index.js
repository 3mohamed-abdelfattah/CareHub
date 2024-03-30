const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const validator = require('validator')
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');

const User = require('./models/userModel')
const Complaint = require('./models/complaintModel')
const Doctor = require('./models/doctorModel')
const Order = require('./models/orderModel')
const Message = require('./models/messageModel')
const Conversation = require('./models/conversationModel')
const protectURL = require('./middleware/protectURL')
const { getReceiverSocketId , io , server } = require('./socket/socket.js')


const generateTokenAndSetCookie = require('./utils/generateToken.js')
const CheckAdmin = require('./middleware/functions')


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const dbName = 'doctors'

require('dotenv').config() // to use the .env file


const { MongoClient, ObjectId } = require('mongodb');

const PORT = process.env.PORT || 5000
const url = process.env.MONGO_URL

mongoose.connect(url).then(()=>{
  console.log('mongodb server start')
})


const app = express()

app.use(express.json()) // to allow the server to read the body of the request

app.use(cors()) // to allow the server to accept requests from the frontend
app.use(cookieParser())

app.get('/api/users', async (req, res) => {
  const query = req.query
  const limit = query.limit || 100
  const page = query.page || 1
  const skip = (page - 1) * limit

  const users = await User.find({}, {"__v" : 0 , 'password' :false , }).limit(limit).skip(skip)
  res.status(200).json(users)

})

// GET endpoint to get a user by id
app.get('/api/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (user) {
    res.json(user);
  }else {
    res.status(404).send('User not found');
  }
})

// find user by email
app.get('/api/userbymail', async (req, res) => {

  
  const user = await User.findOne({email : req.body.email})
  if (user) {
    res.json(user);
  }
  else {
    res.status(404).send('User not found');
  }
})


app.get('/api/user/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).select('email , role');
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/registeration', async (req, res) => {


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

})

app.post('/api/login', async (req, res) => {
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
})


// PATCH endpoint to update a user role by id 
app.patch('/api/updateRole/:id', async (req, res) => {

  const id = req.params.id;
  const { setRole } = req.body;
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

// DELETE endpoint to delete a user by id 
app.delete('/api/delete/:id', async (req, res) => {
  const id = req.params.id;


  const user = await User.findById(id);
  if(user){
    await user.deleteOne();
    res.json({message: 'User removed'});
  } else {
    res.status(404).send('User not found');
  }

} );


app.patch('/api/update/:id', async (req, res) => {
  const id = req.params.id;
  const { newFirstname, newLastname, newEmail , newPassword , newRole} = req.body;
  
  const userToUpdate = await User.findById(id);
  
  if (userToUpdate)
    {
    if (newFirstname) userToUpdate.firstname = newFirstname;
    if (newLastname) userToUpdate.lastname = newLastname;
    if (newEmail) userToUpdate.email = newEmail;
    if (newRole){
      if(newRole !== 'Admin' && newRole !== 'User' && newRole !== 'Master' && newRole !== 'Doctor' ){
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

      const collection = req.params.collection;

      const collectionName = database.collection(collection);
      const result = await collectionName.find({}).toArray()
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





// get all hospitals from the database
app.get('/api/hospitals', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("hospitals");

    const hospitalsCollection = database.collection('hospital');

    const hospitals = await hospitalsCollection.find({}).toArray();

    res.json(hospitals);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get hospitals by id
app.get('/api/hospitals/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("hospitals");

    const hospitalsCollection = database.collection('hospital');

    const id = req.params.id;

    const hospital = await hospitalsCollection.findOne({_id : new ObjectId(id)});
    if(hospital){
      res.json(hospital)
    } else {
      res.status(404).send('Hospital not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

// get all Labs from the database
app.get('/api/labs', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Labs");

    const LabsCollection = database.collection('lab');

    const Labs = await LabsCollection.find({}).toArray();

    res.json(Labs);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get labs by id
app.get('/api/labs/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Labs");

    const LabsCollection = database.collection('lab');

    const id = req.params.id;

    const lab = await LabsCollection.findOne({_id : new ObjectId(id)});
    if(lab){
      res.json(lab)
    } else {
      res.status(404).send('Lab not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

// get all Clinics and medicalCenters from the database
app.get('/api/clinics', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Clinics_and_medicalCenters");

    const ClinicsCollection = database.collection('Clinics_AND_Centers');

    const Clinics = await ClinicsCollection.find({}).toArray();

    res.json(Clinics);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get clinics by id
app.get('/api/clinics/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Clinics_and_medicalCenters");

    const ClinicsCollection = database.collection('Clinics_AND_Centers');

    const id = req.params.id;

    const clinic = await ClinicsCollection.findOne({_id : new ObjectId(id)});
    if(clinic){
      res.json(clinic)
    } else {
      res.status(404).send('Clinic not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

// get all pharmaceutical_companies from the database
app.get('/api/companies', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("pharmaceutical_companies");

    const companiesCollection = database.collection('companies');

    const companies = await companiesCollection.find({}).toArray();

    res.json(companies);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get companies by id
app.get('/api/companies/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("pharmaceutical_companies");

    const companiesCollection = database.collection('companies');

    const id = req.params.id;

    const company = await companiesCollection.findOne({_id : new ObjectId(id)});
    if(company){
      res.json(company)
    } else {
      res.status(404).send('Company not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

// get all Radiologycenters from the database
app.get('/api/radiologycenters', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Radiologycenters");

    const RadiologycentersCollection = database.collection('radiologycenter');

    const Radiologycenters = await RadiologycentersCollection.find({}).toArray();

    res.json(Radiologycenters);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get radiologycenters by id
app.get('/api/radiologycenters/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Radiologycenters");

    const RadiologycentersCollection = database.collection('radiologycenter');

    const id = req.params.id;

    const radiologycenter = await RadiologycentersCollection.findOne({_id : new ObjectId(id)});
    if(radiologycenter){
      res.json(radiologycenter)
    } else {
      res.status(404).send('Radiologycenter not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

// get all Pharmacies from the database
app.get('/api/Pharmacies', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Pharmacies");

    const PharmaciesCollection = database.collection('pharmacy');

    const Pharmacies = await PharmaciesCollection.find({}).toArray();

    res.json(Pharmacies);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get pharmacies by id
app.get('/api/Pharmacies/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Pharmacies");

    const PharmaciesCollection = database.collection('pharmacy');

    const id = req.params.id;

    const pharmacy = await PharmaciesCollection.findOne({_id : new ObjectId(id)});
    if(pharmacy){
      res.json(pharmacy)
    } else {
      res.status(404).send('Pharmacy not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

// get all Clinics and medicalCenters from the database
app.get('/api/c&mc', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Clinics_and_medicalCenters");

    const PharmaciesCollection = database.collection('Clinics_AND_Centers');

    const Pharmacies = await PharmaciesCollection.find({}).toArray();

    res.json(Pharmacies);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});

//get c&mc by id
app.get('/api/c&mc/:id', async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db("Clinics_and_medicalCenters");

    const PharmaciesCollection = database.collection('Clinics_AND_Centers');

    const id = req.params.id;

    const pharmacy = await PharmaciesCollection.findOne({_id : new ObjectId(id)});
    if(pharmacy){
      res.json(pharmacy)
    } else {
      res.status(404).send('Clinic or medicalCenter not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
}
});



app.post('/api/complaint', async (req, res) => {
  try {
    const { name, email, phoneNumber, problem } = req.body;

    if (!(name && email && phoneNumber && problem)) {
      return res.status(400).send('All fields are required');
    }

    if (!validator.isEmail(email)) {
      return res.status(400).send('Invalid email address');
    }

    const newComplaint = new Complaint({
      name,
      email,
      phoneNumber,
      problem
    });

    await newComplaint.save();

    res.status(200).send('Complaint saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/complaint', async (req, res) => {
  try {
      const complaints = await Complaint.find({});
      
      res.status(200).json(complaints);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});


app.post('/api/orders', upload.single('file'), async (req, res) => {
  try {
    const { name, phoneNumber, address, order } = req.body;
    
    const file = req.file; 

    if (!(name && phoneNumber && address && order )) {
      return res.status(400).send('All fields are required');
    }


    const newOrder = await Order.create({
      name,
      phoneNumber,
      address,
      order,
      file
    });
    await newOrder.save();

    res.status(201).send('Order saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/orders/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).send('Order not found');
    }

    // Access the image data from the order object
    const imageData = order.file.data;
    const contentType = order.file.contentType;

    // Set response headers for image data
    res.setHeader('Content-Type', contentType);
    res.send(imageData);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



//send message  **no Protection**
app.post('/api/sendmsg/:senderID/:reseverID',async (req, res) => {
	try {
		const { message } = req.body;
		const reseverID = req.params.reseverID;
    const resever = await User.findById(reseverID);

    const senderID = req.params.senderID;
    const user = await User.findById(senderID);



    // const user = await User .findById(req.params.senderID);

		// const senderId = req.user._id;

    // const user = await User .findById(req.params.senderID);

		let conversation = await Conversation.findOne({
			participants: { $all: [user._id, resever._id] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [user._id, resever._id],
			});
		}

		const newMessage = new Message({
			senderId :user._id,
			receiverId :resever._id,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		const receiverSocketId = getReceiverSocketId(resever._id);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
});

//get all messages  **no Protection**
app.get('/api/messages/:id', async (req, res) => {
  try {
		const { id: userToChatId } = req.params;
		// const senderId = req.user._id;

    //find user by id
    const user = await User.findById(userToChatId);


		const conversation = await Conversation.findOne({
			participants: { $all: [user._id, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
});
// **no Protection**
app.get('/api/otherusers/:id' , async (req, res) => {
  try {

		const loggedInUserId = req.params.id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
  }
});

//get message from one user to another **no Protection**
app.get('/api/messages/:senderID/:receiverId', async (req, res) => {
  try {
    const { senderID, receiverId } = req.params;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverId] },
      
    }).populate("messages");


    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    if (messages.length === 0) {
      return res.status(404).send("No messages found");
    }
      
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});