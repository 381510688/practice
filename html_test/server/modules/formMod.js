/**
 * Created by ligang on 16/8/8.
 */
var express = require('express');
var router = express.Router();

router.post('/userInfo', function(req, res, next){
    console.log(req.body);
    res.send(req.body);
});

router.post('/uploadFile', function(req, res, next){
    console.log(req.body);
    res.send(req.body);
});

router.post('/select', function(req, res, next){
    console.log(req.body);
    res.send(req.body);
});

router.post('/validate', function(req, res, next){
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;