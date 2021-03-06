var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var randtoken = require('rand-token');
var dialog = require('dialog');

var index = require('./routes/index');
var users = require('./routes/users');
var lovelist = require('./routes/lovelist');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(stylus.middleware(path.join(__dirname, 'public'))); //uncomment line ini untuk menggunakan stylus
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/lovelist', lovelist);


app.post('/', urlencodedParser, function(req, res) {
	var post = req.body;
	if (post.username_or_email == 'frontend' && post.password == "intern") {
		var token = randtoken.generate(40);
    var json =
    [
      {
        photo: "images/vans.png",
        name: "Vans Disney", 
        price: "Rp 720.000",
        comment: "2",
        loved: "7"
      },
      {
        photo: "images/poster.png",
        name: "Poster Kayu Tema Vespa", 
        price: "Rp 175.000",
        comment: "0",
        loved: "4"
      },
      {
        photo: "images/preloved.png",
        name: "Preloved TOPSHOP", 
        price: "Rp 650.000",
        comment: "0",
        loved: "7"
      },
      {
        photo: "images/dk084.png",
        name: "DK084", 
        price: "Rp 160.000",
        comment: "0",
        loved: "4"
      },
      {
        photo: "images/jaket.png",
        name: "Jaket Jeans", 
        price: "Rp 110.000",
        comment: "0",
        loved: "4"
      }
    ];

    res.render('lovelist', {data: json});
	} else {
		// res.render('error')
    if (post.username_or_email == null || post.username_or_email == "") {
      dialog.info('Email atau Username tidak boleh kosong');
    } else 
    if (post.username_or_email.length < 4) {
      dialog.info('Email atau Username minimal 4 karakter');
    } else 
    if (post.password == null || post.password == "") {
      dialog.info('Password tidak boleh kosong');
    } else 
    if (post.password.length < 6) {
      dialog.info('Password minimal 6 karakter');
    } else {
      res.render('error');
    }
	}
});

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
