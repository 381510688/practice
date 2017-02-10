/**
 * Created by ligang on 16/10/11.
 */
function f(x){
    var a = x;
    var innerFun = function(){
        return a;
    };
    a++;
    return innerFun;
}

var fn = f(5);
console.log(fn());

/*闭包不会因为外部函数环境的注销而消失,会始终存在*/
/*
 <button onclick="doFn();">doFn()</button>
 <button onclick="m1();">m1()</button>
 <button onclick="m2();">m2()</button>
 <button onclick="m3(100);">m3()</button>
 */
var m1, m2, m3;
function doFn(){
    var t = 1;
    m1 = function(){
        console.log(t);
    };
    m2 = function(){
        t++;
    };
    m3 = function(x){
        t = x;
    }
}