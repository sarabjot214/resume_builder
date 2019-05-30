// var crypto = require('crypto');
// var jwt = require('jsonwebtoken');

const mongoose=require('mongoose');

var User=mongoose.model('signups',{
    name:{
        type:String,
        required: true      
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true
    }
    // hash: String,
    // salt: String
})


module.exports={User};