const { User } = require("../models/userModel.js");
const bcrypt = require("bcrypt")

//-----------------------------------------------------------------------------
const registration = async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password: bcrypt.hash(password, 10) });
    await user.save();
};

const login = async (req, res) => {

};

module.exports = {
    registration,
    login
};


