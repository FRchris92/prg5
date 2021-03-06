// includes
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('underscore');
// var expressValidator = require('express-validator');

// create app
var app = express();

// configs
app.set('case sensitive routing', false);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./controllers/dashboard'));
// app.use(require('./controllers/users'));
app.use(require('./controllers/login'));
app.use(require('./controllers/logout'));
app.use(require('./controllers/register'));
app.use(require('./controllers/profile'));

app.use(require('./controllers/clubCreate'));
app.use(require('./controllers/divisionCreate'));
app.use(require('./controllers/team'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// test123 hash: $2a$10$kJL/QHSNjkpBPTf0EebALOYIZzuVqGJJinZljLXbDOeqTWRWYMxK.
