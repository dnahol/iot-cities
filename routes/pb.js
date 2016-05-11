'use strict'

var express = require('express');
var path = require('path');
var router = express.Router();
var request = require('request');
var Base64 = require('js-base64').Base64;
var API_KEY = process.env.PB_API_KEY;
var SECRET = process.env.PB_SECRET;


router.get('/getData', function(req, res) {
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
    // console.log('err:', err)
    // console.log('response:', response)
    // console.log('body:', body)

    var accessToken = JSON.parse(body).access_token

    var apiUrl = 'https://api.pitneybowes.com/location-intelligence/geolife/v1/demographics/byaddress?address=1 Global View, Troy, NY&country=USA'

    console.log('accessToken:', accessToken)
    request.get({
      url: apiUrl,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }, (err, response, body) => {
      res.status(err ? 400 : 200).send(err || JSON.stringify(JSON.parse(body), null, 2));
    });
  })
})

module.exports = router;
