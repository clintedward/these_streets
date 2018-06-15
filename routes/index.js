var express = require('express');
var router = express.Router();
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
/* eslint-enable no-unused-vars */

var Destinations = require('../models/Destinations');

/* GET home page. */
/* eslint-disable no-unused-vars */
router.get('/', function (req, res, next) {
/* eslint-enable no-unused-vars */

  Destinations.find({}, function (err, destinations) {
    if (err) throw err;

    let data = {
      title: 'City Streets',
      destinations: destinations


    }







    res.render('../views/', data);


  });



});

module.exports = router;
