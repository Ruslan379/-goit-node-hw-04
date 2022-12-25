const app = require('./app')

const { lineBreak } = require("./service")

//? +++++++++++++++++++  mongoose +++++++++++++++++++
const mongoose = require("mongoose");
// const DB_HOST1 = "mongodb+srv://Ruslan:SiaLzikXKL7dkvK2@cluster379.kq6zkfp.mongodb.net/online_shop?retryWrites=true&w=majority";
// const DB_HOST = "mongodb+srv://Ruslan:SiaLzikXKL7dkvK2@cluster379.kq6zkfp.mongodb.net/db-contacts?retryWrites=true&w=majority";

// const { DB_HOST } = require("./config.js");

const { DB_HOST, DB_HOST1, PORT = 3000 } = process.env;

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() => lineBreak())
  .then(() => console.log(`Server is running on the port: ${PORT}`.bgGreen.red))
  .then(() => console.log("Database connection successful"))
  .then(() => lineBreak())
  .catch(error => {
    console.log(error.message);
    process.exit(1); //? закрыть все неиспользуемые процессы
  });
//? _____________________  mongoose _____________________



//----------------------------------------------------------------
// const { PORT = 3000 } = process.env

// app.listen(PORT, (err) => {
//   if (err) console.error("Error at server launch", err.message);
//   console.log(`Server is running on the port: ${PORT}`.bgGreen.red);
//   lineBreak();
// });



//todo --> OLD ------------------------------------

// const app = require('./app')

// const { lineBreak } = require("./service")




// //----------------------------------------------------------------
// const { PORT = 3000 } = process.env

// app.listen(PORT, (err) => {
//   if (err) console.error("Error at server launch", err.message);
//   console.log(`Server is running on the port: ${PORT}`.bgGreen.red);
//   lineBreak();
// });
