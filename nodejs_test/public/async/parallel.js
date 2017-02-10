var async = require("async");   // https://github.com/caolan/async

var start = new Date().getTime();
async.parallel([
    function(callback){
        setTimeout(callback, 100);
    }, function(callback){
        setTimeout(callback, 200);
    }, function(callback){
        setTimeout(callback, 300);
    }
],function(err, result){
    console.log(new Date().getTime() - start + "ms");   // 323
});