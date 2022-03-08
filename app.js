var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
require ('dotenv').config()

const routerUsers = require('./routes/users.router')

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',routerUsers)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))

module.exports = app;
