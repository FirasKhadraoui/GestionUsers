const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    FirstName : String,
    LastName : String,
    Email : String,
    Age: String
},{timestamps:true}) //Trace sur BD 


module.exports = mongoose.model('users',UserSchema)
