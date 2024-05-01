const Comment = require('../models/commentModel')
const validator = require('validator');



const makeComment = async (req, res) => {
  try {
    const { name, email, comment ,docID } = req.body;

    if (!(name && email && comment)) {
      return res.status(400).send('All fields are required');
    }

    if (!validator.isEmail(email)) {
      return res.status(400).send('Invalid email address');
    }

    const newComment = new Comment({
      docID,
      name,
      email,
      comment,
    });

    await newComment.save();

    res.status(200).send(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

const getComment = async (req, res) => {
  try {
    const Comments = await Comment.find({});

    res.status(200).json(Comments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

const getCommentById = async (req, res) => {
  try {
    const { docID } = req.query; // Get docID from query parameters

    if (!docID) {
      return res.status(400).send('Missing docID parameter');
    }

    const comments = await Comment.find({ docID }); // Filter comments

    if (!comments.length) {
      return res.status(200).json([]); // Send empty array if no comments found
    }

    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}


module.exports = {
  makeComment,
  getComment,
  getCommentById
}