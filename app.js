require('./models/connection');
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pokemonsRouter = require('./routes/pokemons');
var paymentRouter = require('./routes/payment');

var app = express();
var cors = require('cors');

app.use(express.static("public"));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pokemons',pokemonsRouter);
app.use('/payment', paymentRouter);


module.exports = app;
