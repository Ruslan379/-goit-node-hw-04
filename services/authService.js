const { User } = require("../models/userModel.js");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require("dotenv").config()

//-----------------------------------------------------------------------------
const registration = async (email, password) => {
    const user = new User({
        email,
        // password: await bcrypt.hash(password, 10)
        password
    });
    await user.save();
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw Error(`No user with email: '${email}' found`)
    }
    if (!await bcrypt.compare(password, user.password)) {
        throw Error(`Wrrong password`)
    }
    const token = jwt.sign({
        _id: user.id,
        createdAt: user.createdAt,
    }, process.env.JWT_SECRET);
    console.log("token:", token);
    return token;
};

module.exports = {
    registration,
    login
};


