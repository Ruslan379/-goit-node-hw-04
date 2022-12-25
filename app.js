const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()
require("colors");

const contactsRouter = require('./routes/api/contacts')

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

//----------------------------------------------------------------
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  console.log("!!! ОШИБКА !!!:".bgRed.white)
  console.log('Такой маршрут не найден...'.bgYellow.red)
  res.status(404).json({ message: 'Not found' })
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
