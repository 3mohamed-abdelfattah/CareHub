const Comment = require('../models/commentModel')
const validator = require('validator');



const makeComment = async (req, res) => {
  try {
    const { name, email, comment } = req.body;

    if (!(name && email && comment)) {
      return res.status(400).send('All fields are required');
    }

    if (!validator.isEmail(email)) {
      return res.status(400).send('Invalid email address');
    }

    const newComment = new Comment({
      name,
      email,
      comment
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
  const id = req.params.id;
  const comment = await Comment.findById(id);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
}

module.exports = {
  makeComment,
  getComment,
  getCommentById
}