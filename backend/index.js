const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const { server, app } = require('./socket/socket.js')
const CheckAdmin = require('./middleware/functions')
const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');

  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    const fileName = `user-${Date.now()}.${ext}`
    cb(null, fileName);
  }
});

const fileFilter = (req, file, cb) => {
  const imageType = file.mimetype.split('/')[0];

  if (imageType == 'image') {
    cb(null, true);
  }
  else {
    cb(res.status(400).send('file must be image'), false);
  }
}
const upload = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
});




require('dotenv').config() // to use the .env file

const PORT = process.env.PORT || 5000
const url = process.env.MONGO_URL

mongoose.connect(url).then(() => {
  console.log('mongodb server start')
})




//******************************************************** */
const complaintAndOrderController = require('./controllers/complaintAndOrders.js')
const dashboardController = require('./controllers/dashboardController.js')
const doctorController = require('./controllers/doctorController.js')
const loginPageController = require('./controllers/loginPageController.js')
const messagesController = require('./controllers/messagesontroller.js')
const otherPlacesController = require('./controllers/otherPlacesContrroller.js')
const userController = require('./controllers/userController.js')
const CommentController = require('./controllers/commentController.js')
//******************************************************** */

app.use(express.json()) // to allow the server to read the body of the request

app.use(cors()) // to allow the server to accept requests from the frontend
app.use(cookieParser())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




app.get('/api/users', userController.getUSer)
app.get('/api/users/:id', userController.getUserById)
app.get('/api/userbymail', userController.getUserByEmail)
app.get('/api/user/:id', userController.getEmailAndRole);



app.post('/api/registeration', loginPageController.registerationPage)
app.post('/api/login', loginPageController.loginPage)




// PATCH endpoint to update a user role by id 
app.patch('/api/updateRole/:id', dashboardController.UpdateUserRole);
// DELETE endpoint to delete a user by id 
app.delete('/api/delete/:id', dashboardController.deleteUser);
// PATCH endpoint to update a user by id
app.patch('/api/update/:id', dashboardController.updateUser);



// gt all doctors by collection
app.get('/api/doctors/:collection', doctorController.getAllDoctors)
// get doctor by id and collection
app.get('/api/doctors/:collection/:id', doctorController.getDoctorByIdAndSpeciality)
//edit doctor by id and collection
app.patch('/api/doctors/:collection/:id', CheckAdmin, doctorController.UpdateDoctor);




// get all hospitals from the database
app.get('/api/hospitals', otherPlacesController.getAllHosptels);
//get hospitals by id
app.get('/api/hospitals/:id', otherPlacesController.getHospitalById);
// get all Labs from the database
app.get('/api/labs', otherPlacesController.getLabs);
//get labs by id
app.get('/api/labs/:id', otherPlacesController.getLabById);
// get all Clinics and medicalCenters from the database
app.get('/api/clinics', otherPlacesController.getClinics);
//get clinics by id
app.get('/api/clinics/:id', otherPlacesController.getClinicById);
// get all pharmaceutical_companies from the database
app.get('/api/companies', otherPlacesController.getCompanies);
//get companies by id
app.get('/api/companies/:id', otherPlacesController.getCompanyById);
// get all Radiologycenters from the database
app.get('/api/radiologycenters', otherPlacesController.getRadiologyCenters);
//get radiologycenters by id
app.get('/api/radiologycenters/:id', otherPlacesController.getRadiologyCenterById);
// get all Pharmacies from the database
app.get('/api/Pharmacies', otherPlacesController.getPharmacies);
//get pharmacies by id
app.get('/api/Pharmacies/:id', otherPlacesController.getPharmacyById);
// get all Clinics and medicalCenters from the database
app.get('/api/c&mc', otherPlacesController.getClinicsAndMedicalCenters);
//get c&mc by id
app.get('/api/c&mc/:id', otherPlacesController.getClinicsAndMedicalCentersById);



app.post('/api/complaint', complaintAndOrderController.makeComplaint);
app.get('/api/complaint', complaintAndOrderController.getComplaints);

app.post('/api/orders', upload.single('image'), complaintAndOrderController.makeOrder);
app.get('/api/orders', complaintAndOrderController.getOrders);
app.get('/api/order-image/:id', complaintAndOrderController.orderImage);



//send message  **no Protection**
app.post('/api/sendmsg/:senderID/:reseverID', messagesController.sendMessage);
//get all messages  **no Protection**
app.get('/api/messages/:id', messagesController.getMessages);
// **no Protection**
app.get('/api/otherusers/:id', messagesController.otherConversation);
//get message from one user to another **no Protection**
app.get('/api/messages/:senderID/:receiverId', messagesController.getConversationsForUser);




app.post('/api/comment', CommentController.makeComment);
app.get('/api/all-comments', CommentController.getComment);
app.get('/api/comments', CommentController.getCommentById);




server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});