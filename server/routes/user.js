var express = require('express')
var router = express.Router()
var {persoanlDetails} = require('../routes/personalDetails-model')

// GET /api/user
router.get('/', function (req, res) {
    res.send('this is the index for user')
});

router.get('/:userId', function (req, res) {
    res.send('this is user #' + req.params.userId)
})

router.post('/:userId/personalDetails', function (req, res) {
    var personalDetail = new persoanlDetails(req.body)
    personalDetail.save().then(doc=>{
        res.send(doc);
        console.log('User Details Data:'+doc);
    },err=>{
        console.log('Unable to Save the Data'+err);
        res.send({})
    })
})

module.exports = router