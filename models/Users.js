var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    full_name: String,
    email: String

});

module.exports = mongoose.model('Users', UsersSchema);