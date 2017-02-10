/**
 * Created by ligang on 16/10/11.
 */

/* 套用函数 */
Function.prototype.method = function(name, fn){
    if(!this.prototype[name]){
        this.prototype[name] = fn;
        return this;
    }
};

Function.method("curry", function(){
    var slice = Array.prototype.slice,
        fn = this,
        arys = slice.call(arguments);
    return function(){
        return fn.apply(null, arys.concat(slice.call(arguments)));
    };
});

var add = function(){
    var sum = 0;
    for(var i = 0, len = arguments.length; i < len; i++){
        sum += arguments[i];
    }
    return sum;
};

var f = add.curry(2);
console.log(f(3));


/* 函数柯里化 */

function curry(fn){
    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
    return function(){
        return fn.apply(null, args.concat(slice.call(arguments)));
    };
}

var add = function(){
    var sum = 0;
    for(var i = 0, len = arguments.length; i < len; i++){
        sum += arguments[i];
    }
    return sum;
};

var f = curry(add, 2);
console.log(f(3));