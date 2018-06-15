var express = require('express');
var router = express.Router();
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
/* eslint-enable no-unused-vars */
var Users = require('../models/Users')

/* GET users listing. */
//sends new users to the mongoDB
/* eslint-disable no-unused-vars */
router.post('/', function (req, res, next) {
/* eslint-enable no-unused-vars */

  var user = new Users();

  user.full_name = req.body.full_name;
  user.email = req.body.email;

  user.save(function (error) {
    if (error)
      res.send(error);

    res.redirect('/')
  });
});

/* eslint-disable no-unused-vars */
router.get('/', function(req, res, next){
/* eslint-enable no-unused-vars */
      Users.find({}, function (err, users) {
          if (err) throw err;

          let data = {
              title: 'All posts',
              users: users
          }

          res.render('../views/index', data);


      });


    
});


module.exports = router;
