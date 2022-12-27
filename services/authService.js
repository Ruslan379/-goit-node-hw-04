const { User } = require("../models/userModel.js");
const bcrypt = require("bcrypt")

//-----------------------------------------------------------------------------
const registration = async (email, password) => {
    const user = new User({
        email,
        password: await bcrypt.hash(password, 10)
    });
    await user.save();
};

const login = async (req, res) => {

};

module.exports = {
    registration,
    login
};


