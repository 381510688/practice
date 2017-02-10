/**
 * Created by ligang on 16/10/11.
 */

/* 常规方式 */
var t;
function f(){
    t = t ? t : new Date();
    return t;
}
f();

/* 闭包方式 */
var f = (function(){
    var t;
    return function(){
        t = t ? t : new Date();
        return t;
    };
})();
f();

/* 惰性方式,无需每次都求值 */
var f = function(){
    var t = new Date();
    f = function(){
        return t;
    };
    return f();
};
f();