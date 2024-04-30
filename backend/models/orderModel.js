const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  order: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
