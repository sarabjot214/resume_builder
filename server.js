var PORT=3002||process.env.PORT;
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser');
var http=require('http');
var passport = require('passport');

var app = express();


// var config=require('./server/config/passport');
const api=require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular DIST Output Folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use(passport.initialize());
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
