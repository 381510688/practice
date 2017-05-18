/**
 * Created by ligang on 17/5/10.
 */

var mult = (function() {
    var cache = {};
    return function() {
        var numbers = [...arguments];
        if(cache[numbers]) {
            return cache[numbers];
        }
        var sum = numbers.reduce((pre, cur) => {
            return pre + cur;
        }, 0);
        cache[numbers] = sum;
        return sum;
    };
})();


console.log(mult(1,2,3));
console.log(mult(1,2,3));