const express=require('express');
const router=express.Router();
const {ObjectID}=require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const {Mongoose} = require('./mongoose-connect')
var {User} = require('../routes/users-model')

var user = require('./user')

var BCRYPT_SALT_ROUNDS = 12;
//Response Handling
let response={
    status:200,
    data:[],
    message:null
};

router.use('/user', user)

router.get('/users',(req,res)=>{
    User.find().then(result=>{
        response.data=result;
        res.json(response)
    },err=>{
        console.log('Unable to find data'+err);
    });
  
  
})

router.post('/signup',(req,res)=>{
    var user=new User(req.body)
    // var username = req.body.username;
    var password = req.body.password;
    bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
        // return user.save(username, hashedPassword);
        user.password = hashedPassword;
        user.save().then(doc=>{
            res.send(doc);
            console.log('Incoming Data:'+doc);
        },err=>{
            console.log('Unable to Save the Data'+err);
            res.send({})
        })
    })
    // .then(function() {
    //     res.send();
    // })
    .catch(function(error){
        console.log("Error saving user: ");
        console.log(error);
        next();
    });

    // user.save().then(doc=>{
    //     res.send(doc);
    //     console.log('Incoming Data:'+doc);
    // },err=>{
    //     console.log('Unable to Save the Data'+err);
    //     res.send({})
    // })
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
    var loginUser;
    console.log(username)
    User.findOne({
        email: username
    },
    function (err, user) {
        // if (user) {
        //     if (err) return fn(new Error('cannot find user'));
        //     if (pass==user.password) { 
        //         console.log('password matched')
        //         return fn(null, user);}
        //     else fn(new Error('invalid password'));

        // } else {
        //     return fn(new Error('cannot find user'));
        // }
        if(err){
            return fn(new Error('cannot find user'));
        }
        loginUser = user;
        return user;
    })
    .then(function(user) {
        return bcrypt.compare(pass, user.password);
    })
    .then(function(samePassword) {
        if(!samePassword) {
            console.log('password not matched')
            // res.status(403).send();
            return fn(new Error('invalid password'))
        }
        console.log('password matched')
        return fn(null, loginUser);
        // res.send();
    })
    .catch(function(error){
        console.log("Error authenticating user: ");
        console.log(error);
        next();
    });

}


module.exports = router;