var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DestinationsSchema = new Schema({
    destination_name: String,
    meta_description: String,
    write_up_header: String,
    write_up: String,
    longitude: Number,
    latitude: Number,
    uploaded_file: String,
    uploaded_file1: String,
    uploaded_file2: String,
    uploaded_file3: String,
    uploaded_file4: String,
    uploaded_file5: String,
    uploaded_file6: String,
    uploaded_file7: String,
    uploaded_file8: String


});

module.exports = mongoose.model('Destinations', DestinationsSchema);