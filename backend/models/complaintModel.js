const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  }
}, { collection: 'Complaint' }); 


const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
