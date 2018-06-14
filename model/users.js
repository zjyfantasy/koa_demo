var mongoose = require('mongoose');  
var userSchema = mongoose.Schema({
    name:String,
    age:Number,
    mobile:String,
    province:String,
    city:String,
    district:String,
    hobby:[]
});

const Users= mongoose.model('Users', userSchema);

module.exports = Users;