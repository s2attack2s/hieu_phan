var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
res.render('index');
})
// app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.listen(process.env.PORT || 4000)

