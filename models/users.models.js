const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    FirstName : String,
    LastName : String,
    Email : String,
    Username : String,
    Age: String
},{timestamps:true}) //Trace sur BD 


module.exports = mongoose.model('users',UserSchema)
