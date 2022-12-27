const { registration, login } = require("../services/authService.js")


const registrationController = (req, res) => {
    const { email, password } = req.body;
};



const loginController = (req, res) => {

};


module.exports = {
    registrationController,
    loginController
}