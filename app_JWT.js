const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()
require("colors");
//----------------------------------------------------------------









//! Кодирование  jwt-токена (jsonwebtoken)
const jwt = require('jsonwebtoken');

const payload = { id: 123456, username: 'Larson' };
const secret = 'secret word';
const token = jwt.sign(payload, secret);

console.log("token:", token);


//! Декодирование токена
const decode = jwt.decode(token);

console.log("decode:", decode);


//! Проверка подлинности токена
const verify = jwt.verify(token, secret);

console.log("verify:", verify);


//! Авторизация с помощью JWT






// module.exports = app
