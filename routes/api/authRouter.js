const express = require('express')
const router = express.Router()

const { ctrlWrapper } = require("../../middlewares")

// const { contacts: ctrl } = require("../../controllers")

const { registrationController, loginController } = require("../../controllers/authController.js")


//-----------------------------------------------------------------------------
//! 1. Регистрация
router.post("/registration", ctrlWrapper(registrationController))


//! 2. Login
router.post('/login', ctrlWrapper(loginController))



module.exports = { authRouter: router }
