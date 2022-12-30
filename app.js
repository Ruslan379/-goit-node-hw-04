const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()
require("colors");

const contactsRouter = require('./routes/api/contactsRouter.js')
// const { authRouter } = require('./routes/api/authRouter.js') //?
const authRouter = require('./routes/api/authRouter.js') //?

// //? +++++++++++++++++++  mongoose +++++++++++++++++++
// const mongoose = require("mongoose");
// // const DB_HOST1 = "mongodb+srv://Ruslan:SiaLzikXKL7dkvK2@cluster379.kq6zkfp.mongodb.net/online_shop?retryWrites=true&w=majority";
// // const DB_HOST = "mongodb+srv://Ruslan:SiaLzikXKL7dkvK2@cluster379.kq6zkfp.mongodb.net/db-contacts?retryWrites=true&w=majority";

// // const { DB_HOST } = require("./config.js");

// const { DB_HOST } = process.env;

// mongoose.connect(DB_HOST)
//   .then(() => console.log("Database connect"))
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1); //? закрыть все неиспользуемые процессы
//   });
// //? _____________________  mongoose _____________________

//---------------------------routes-------------------------------
//! auth

// POST --> http://localhost:3001/api/users/signup
// POST --> http://localhost:3001/api/users/login

//!  POST --> http://localhost:3001/api/auth/registration
//!  POST --> http://localhost:3001/api/auth/login

//  Headers --> Authorization -->
//  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2FiNGQzOTFiMmMxNDJjOGY2OTM1YjIiLCJlbWFpbCI6IjU1NUB1a3IubmV0IiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yN1QxOTo1MzoyOS42MjJaIiwiaWF0IjoxNjcyMzM4ODk2fQ.OF7nTx66ljHbC90VfIGsXGxwLK3ulHIrF104g55g7bA


//* contacts
//  http://localhost:3001/api/contacts
//  http://localhost:3001/api/contacts/id
//  http://localhost:3001/api/contacts/id/favorite
//* http://localhost:3001/api/contacts?skip=0&limit=4

//  http://localhost:3001/api/contacts?skip=0&limit=2&favorite=true
//  http://localhost:3001/api/contacts?skip=0&limit=2&sortField=favorite
//  http://localhost:3001/api/contacts?skip=0&limit=2&sortField=favorite&sortOrder=DESC


//----------------------------------------------------------------
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())


app.use('/api/contacts', contactsRouter)
app.use('/api/auth', authRouter) //?
// app.use('/api/users', authRouter) //? ДЗ-4


app.use((req, res) => {
  console.log("!!! ОШИБКА !!!:".bgRed.white)
  console.log('Такой маршрут не найден...'.bgYellow.red)
  res.status(404).json({ message: 'Route not found' })
})


app.use((err, req, res, next) => {
  const { status = 500, message = "Server ERROR" } = err;
  //! ===========================console============================
  console.log("!!! ОШИБКА !!!:".bgRed.white)
  // console.error(err.message)
  console.error(err.message.red)
  console.log("");
  //! ==============================================================
  res.status(status).json({ message: err.message })
  // res.status(status).json(err.message)
})


module.exports = app
