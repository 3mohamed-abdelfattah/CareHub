const Complaint = require('../models/complaintModel')
const Order = require('../models/orderModel')
const validator = require('validator');




const makeComplaint =  async (req, res) => {
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
}

const getComplaints =  async (req, res) => {
    try {
        const complaints = await Complaint.find({});
        
        res.status(200).json(complaints);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

const deleteComplaint = async (req, res) => {
    try {
      const complaint = await Complaint.findById(req.params.id);
      if (complaint) {
        await complaint.deleteOne();
        res.status(200).send('Complaint deleted successfully');
      } else {
        res.status(404).send('Complaint not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

}


const makeOrder =  async (req, res) => {
    try {
      const { name, phoneNumber, address, order  } = req.body;
      


      if (!(name && phoneNumber && address && order )) {
        return res.status(400).send('All fields are required');
      }
  
  
      const newOrder = await Order.create({
        name,
        phoneNumber,
        address,
        order,
        image: req.file.filename
  
      });
      await newOrder.save();
  
      res.status(201).send('Order saved successfully' + newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

const getOrders =  async (req, res) => {
    try {
      const orders = await Order.find({});
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

const orderImage = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.status(200).send(order.image);
      }
      else {
        res.status(404).send('No image found');
      }
}
    catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

const deleteOrder = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        await order.deleteOne();
        res.json({message: 'Order removed'})
      } else {
        res.status(200).send('Order deleted successfully');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }

}


module.exports = {
    makeComplaint,
    getComplaints,
    makeOrder,
    getOrders,
    orderImage,
    deleteComplaint,
    deleteOrder

}