const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userID, res) => {
        const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
            expiresIn: '15d',
        });

        res.cookie('jwt', token, {
            maxAge: 1000 * 60 * 60 * 24 * 15,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
        });
    }


module.exports = generateTokenAndSetCookie;