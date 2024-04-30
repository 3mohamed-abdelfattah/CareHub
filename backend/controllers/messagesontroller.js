const { getReceiverSocketId , io } = require('../socket/socket.js')
const Conversation = require('../models/conversationModel')
const Message = require('../models/messageModel')
const User = require('../models/userModel')




const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const reseverID = req.params.reseverID;
    const resever = await User.findById(reseverID);

    const senderID = req.params.senderID;
    const user = await User.findById(senderID);




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
}

const getMessages = async (req, res) => {
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
}

const otherConversation = async (req, res) => {
    try {
  
          const loggedInUserId = req.params.id;
  
          const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
  
          res.status(200).json(filteredUsers);
      } catch (error) {
          console.error("Error in getUsersForSidebar: ", error.message);
          res.status(500).json({ error: "Internal server error" });
    }

}

const getConversationsForUser =  async (req, res) => {
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
}

module.exports = { sendMessage, getMessages, otherConversation, getConversationsForUser }