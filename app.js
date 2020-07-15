//require
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var logger = require('morgan');
const AppError = require("./src/utils/appError")
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const app = express();
const indexRouter = require('./routes/index');
const authRouter = require("./routes/auth")
const userRouter =  require("./routes/users")
const quesRouter = require("./routes/ques")
// const quesRouter = require('./routes/ques');
const cors = require("cors")
//
require("dotenv").config()



mongoose.connect(process.env.DB, {
    // some options to deal with deprecated warning, you don't have to worry about them.
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => console.log("connected to database"))

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/ques', quesRouter);
// app.use('/ques', quesRouter);

module.exports = app;
