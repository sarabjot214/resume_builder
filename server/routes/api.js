const express=require('express');
const router=express.Router();
const {ObjectID}=require('mongodb');
var mongoose = require('mongoose');
const {Mongoose}=require('./mongoose-connect')
var {User}=require('../routes/users-model')
// var User = mongoose.model('Users');
// const { register, login }=require('../controllers/authentication')
// const ctrlProfile=require('../controllers/profile')
// const profileRead=ctrlProfile.profileRead;

// var jwt = require('express-jwt');
// var auth = jwt({
//   secret: 'MY_SECRET',
//   userProperty: 'payload'
// });


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
    
    // User.findOne({ name: "someName" }, function (err, user) {
    //     if (err) console.log (err);
    //     if (!user) console.log ('user not found');
    //     // do something with user
    // });
  
  
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
            // req.session.regenerate(function () {

            //     req.session.user = user;
            //     req.session.success = 'Authenticated as ' + user.username + ' click to <a href="/logout">logout</a>. ' + ' You may now access <a href="/restricted">/restricted</a>.';
            //     res.redirect('/');
            // });
        } else {
            console.log('Authentication Failed')
            res.send({})
            // req.session.error = 'Authentication failed, please check your ' + ' username and password.';
            // res.redirect('/login');
        }
    });
})
// router.post('/register',register)

// router.post('/login',login)

// router.get('/profile', auth, profileRead);
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