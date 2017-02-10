var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
    res.render('ngResource/demo');
});


var userList = [];

/**
 * Get  http://localhost:8888/ngResource/user/16086454          req.params.uid
 * Get  http://localhost:8888/ngResource/user?uid=16086454      req.query.uid
 * Post http://localhost:8888/ngResource/user {uid: 16086454}   req.boy.uid
 */
router.get('/user/:uid',function(req, res, next){
    // var uid = req.query.uid;
    var uid = req.params.uid;
    console.log(uid);
    var user = userList.filter(function(item, index, array){
        return item.id == uid;
    })[0];
    uid === "all" ? res.json(userList) : res.send(user);
});

router.post('/user',function(req, res, next){
    var user = req.body;
    userList.push(user);
    res.end();
});

router.put('/user',function(req, res, next){

});

router.delete('/user',function(req, res, next){
    // var uid = req.body.id;
    console.log(req.params.uid);
    console.log(req.query.uid);
    console.log(req.body.uid);
    // userList = userList.filter(function(item, index, array){
    //     return item.id != uid;
    // });
    res.end();
});


module.exports = router;