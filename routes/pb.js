'use strict'

var express = require('express');
var path = require('path');
var router = express.Router();
var request = require('request');
var Base64 = require('js-base64').Base64;
// var API_KEY = process.env.PB_API_KEY;
// var SECRET = process.env.PB_SECRET;

var API_KEY='SSgWa59eZYKgttl4c5Q0xGlX10NYHJKb'
var SECRET='NripHc1kZBUGlGFE'

router.get('/getData/:address', function(req, res) {

  var oauthUrl = 'https://api.pitneybowes.com/oauth/token';

  var key = Base64.encode(`${API_KEY}:${SECRET}`);

  request.post({
    url: oauthUrl,
    headers: {
      'Authorization': `Basic ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "grant_type=client_credentials"
  }, (err, response, body) => {

    var accessToken = JSON.parse(body).access_token;


    var apiUrl = 'https://api.pitneybowes.com/location-intelligence/geolife/v1/demographics/byaddress?address=' + req.params.address + '&country=USA';

    request.get({
      url: apiUrl,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }, (err, response, body) => {
      console.log("body:", body);
      res.status(err ? 400 : 200).send(err || JSON.stringify(JSON.parse(body), null, 2));
    });
  })
})

module.exports = router;
