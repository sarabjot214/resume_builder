const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/resumeBuilder');

module.exports={mongoose};