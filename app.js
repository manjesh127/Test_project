var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes');
var mongoose = require('mongoose');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
mongoose.connect('mongodb://localhost:27017/ManyaDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(connect => {
  console.log("Database connected with databse name ManyaDb")
}).catch(er => {
  console.log("Database connection failed")
})
app.use('/', usersRouter);

module.exports = app;