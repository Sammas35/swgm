var express = require('express');
var router = express.Router();


var handouts = [
    {name:"hansi"},
    {name:"joey"},
    {name:"pauli"},
    {name:"walter"},
    {name:"karl"}
];

router.get('/', function(req, res, next) {
    res.json(handouts);
});

router.post('/', function(req, res, next) {
    console.log('request body', req.body);
    console.log('handouts', handouts);
    handouts.push(req.body);
    console.log('handouts', handouts);
});


module.exports = router;