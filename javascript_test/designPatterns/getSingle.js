/**
 * Created by ligang on 17/5/11.
 */

/* 单例模式 */
var getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    };
};

function test(){
    console.log(1);
}

function test1() {
    console.log(1);
}

console.log(getSingle(test)() === getSingle(test)());  // true
console.log(getSingle(test)() === getSingle(test1)()); // true