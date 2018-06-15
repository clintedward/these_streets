
var express = require('express');
var router = express.Router();
/* eslint-disable no-unused-vars */
const fileUpload = require('express-fileupload');
/* eslint-enable no-unused-vars */

const mongoose = require('mongoose');
/* eslint-disable no-unused-vars */
var Users = require('../models/Users');
/* eslint-enable no-unused-vars */

var Destinations = require('../models/Destinations');

mongoose.connect('mongodb://thesestreets:1thesestreets@ds245680.mlab.com:45680/city_travel');





// find by id
/* eslint-disable no-unused-vars */
router.get('/:id', function (req, res, next) {
/* eslint-enable no-unused-vars */

    let id = req.params.id;

    Destinations.findById(id, function (err, destinations) {
        if (err) {
            res.send(err);
        } else {

            let data = {
                title: 'All posts',
                destinations: destinations
            }

            res.render('../views/destination', data);

        }
    });

});






// post to mlab
/* eslint-disable no-unused-vars */
router.get('/', function (req, res, next) {
/* eslint-enable no-unused-vars */

    var destination = new Destinations({
        destination_name: req.body.destination_name ,
        meta_description: req.body.meta_description ,
        write_up_header: req.body.write_up_header ,
        write_up: req.body.write_up ,
        longitude: req.body.longitude ,
        latitude: req.body.latitude ,
        uploaded_file: req.files.uploaded_file.name ,
        uploaded_file2: req.files.uploaded_file2.name ,
        uploaded_file3: req.files.uploaded_file3.name ,
        uploaded_file4: req.files.uploaded_file4.name ,
        uploaded_file5: req.files.uploaded_file5.name ,
        uploaded_file5: req.files.uploaded_file6.name ,
        uploaded_file5: req.files.uploaded_file7.name ,
        uploaded_file5: req.files.uploaded_file8.name ,
        uploaded_file5: req.files.uploaded_file9.name 
    });

     

    destination.save(function (error) {
        if (error)
            res.send(error);


    });
    if (req.files) {

        let uploaded_image = req.files.uploaded_file;

        uploaded_image.mv('./public/images/' + uploaded_image.name, function (err) {

            if (err)
                return res.status(500).send(err);

            //  res.send('uploaded');
            console.log('file upload');
            res.redirect('/')
        });

    } else {
        res.send('files not present')

    }
});




module.exports = router;


