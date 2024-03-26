const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const protectURL = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: 'You are not authorized - No Token Provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid Token' });
        }

        const user = await User.findById(decoded.userID).select('-password');
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'You are not authorized' });
    }
};

module.exports = protectURL;