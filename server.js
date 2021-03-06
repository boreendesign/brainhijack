var express = require('express');
var session = require('express-session');
var bp      = require('body-parser');
var path    = require('path');
var app     = express();
var serverport = 8000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));


//session
app.use(session({
  secret: 'brainhijack',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

//server
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(serverport, function(){
    console.log(`Listening on port ${serverport}`);
});