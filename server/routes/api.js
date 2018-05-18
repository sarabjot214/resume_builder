const express=require('express');
const router=express.Router();
const {ObjectID}=require('mongodb');
var mongoose = require('mongoose');
const {Mongoose}=require('./mongoose-connect')
var {User}=require('../routes/users-model')


//Response Handling
let response={
    status:200,
    data:[],
    message:null
};

router.get('/user',(req,res)=>{
    User.find().then(result=>{
        response.data=result;
        res.json(response)
    },err=>{
        console.log('Unable to find data'+err);
    });
  
  
})

router.post('/user',(req,res)=>{
    var user=new User(req.body)

    user.save().then(doc=>{
        res.send(doc);
        console.log('Incoming Data:'+doc);
    },err=>{
        console.log('Unable to Save the Data'+err);
        res.send({})
    })
})

router.post('/login',(req,res)=>{
    var user=req.body
    console.log(user)
    authenticate(user.email, user.password, function (err, user) {
        if (user) {
            console.log('Authenticated as '+ user.name)
            res.send(user)
        } else {
            console.log('Authentication Failed')
            res.send({})
        }
    });
})

function authenticate(username, pass, fn) {
    console.log(username)
    User.findOne({
        email: username
    },
    function (err, user) {
        if (user) {
            if (err) return fn(new Error('cannot find user'));
            if (pass==user.password) { 
                console.log('password matched')
                return fn(null, user);}
            else fn(new Error('invalid password'));

        } else {
            return fn(new Error('cannot find user'));
        }
    });

}


module.exports=router;