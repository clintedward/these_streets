var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Users = require('../models/Users')

/* GET users listing. */
router.post('/', function (req, res, next) {

  var user = new Users();

  user.full_name = req.body.full_name;
  user.email = req.body.email;

  user.save(function (error) {
    if (error)
      res.send(error);

    res.redirect('/')
  });
});

module.exports = router;
