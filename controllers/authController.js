const { registration, login } = require("../services/authService.js")


const registrationController = async (req, res) => {
    const { email, password } = req.body;
    await registration(email, password);

    res.json({ status: "success" });
};



const loginController = (req, res) => {

};


module.exports = {
    registrationController,
    loginController
}