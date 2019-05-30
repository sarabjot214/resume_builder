var PORT=3002||process.env.PORT;
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser');
var http=require('http');
// var passport = require('passport');

var app = express();


// var config=require('./server/config/passport');
const api = require('./server/routes/api');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular DIST Output Folder
app.use(express.static(path.join(__dirname, 'dist')));

// app.use(passport.initialize());
app.use('/api',api)

//Send all other Routes to Angular App
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

//Set Port
app.set('port',PORT)

const server=http.createServer(app);

server.listen(PORT,function(){
    console.log('Listening on port ',PORT);
  })
