var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var almacenRouter = require('./routes/almacen');
var productoRouter= require('./routes/producto');
var db = require('./models/conexion');

var session = require('express-session')

var app = express();


//var expressLayouts = require('express-ejs-layouts');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
//app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.set('trust proxy', 1) 
app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: true, 
  cookie: {maxAge: 300000}
}))
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/almacen',almacenRouter);
app.use('/producto',productoRouter);
/*********************************************** */
var User = require('./models/User.model');
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ login: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      console.log(user.password,password)
      console.log(!user.password.localeCompare(password)==0)
      if (!user.password.localeCompare(password)==0) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(null, user);
  });
});

/************************************/


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

module.exports = app;
