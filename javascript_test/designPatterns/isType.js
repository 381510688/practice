/**
 * Created by ligang on 17/5/10.
 */

var isType = function(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
};

var isArray = isType('Array'),
    isNumber = isType('Number');

console.log(isArray({}) + ',' + isArray([]));
console.log(isNumber('123') + ',' + isNumber(123));