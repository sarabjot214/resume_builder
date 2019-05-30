const mongoose=require('mongoose');

var personalDetails = mongoose.model('personalDetails',{
    userId:{
        type: String,
        unique: true
    },
    name:{
        type: String      
    },
    profession:{
        type: String      
    },
    dob:{
        type: String
    },
    phoneNo:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    address:{
        type: String  
    }
    // image:{}
})


module.exports={personalDetails};