var async = require("async");   // https://github.com/caolan/async

var start = new Date().getTime();
async.series([
    function(callback){
        setTimeout(callback, 100);
    }, function(callback){
        setTimeout(callback, 200);
    }, function(callback){
        setTimeout(callback, 300);
    }
],function(err, result){
    console.log(new Date().getTime() - start + "ms");   // 612
});

async.series([
    function(callback){
        callback(null, 'one');
    }, function(callback){
        callback(null, 'two');
    }
],function(err, result){
    console.log(result);    // ["one", "two"]
});