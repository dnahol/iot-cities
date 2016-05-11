'use strict';

const PORT = process.env.PORT || 8000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var request = require('request');
var Base64 = require('js-base64').Base64;

require('dotenv').config();

var API_KEY = process.env.PB_API_KEY;
var SECRET = process.env.PB_SECRET;

console.log(API_KEY, SECRET);

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/pb'));

var server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
