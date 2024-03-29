var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // for handling cookies
var logger = require('morgan'); // module used for logging out info in the terminal

// routes:: brains behind everything
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var categoriesRouter = require('./routes/categories');

// initializing your app to use Express; letting express framework handle all of the user requests
// responsible for determining how to handle requests
var app = express();

// local variables to app
app.locals.points = "8,713";
app.locals.videodata = require('./videodata.json')

// setting up how the views are handled
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setting up how data is logged and parsed
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// in development stage, you print whole stack trace when an error occurs, as we need to figure out where error occurred
// but when the project is deployed, end users do not want to see this stack trace
// thus it's better to keep 2 error handlers, one to use in production and the other one for development stage
module.exports = app;
