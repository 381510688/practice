/**
 * Created by ligang on 16/10/11.
 */

/* 节流 */
function throttle(method, context){
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 1000);
}

function reszie(){
    console.log(1);
}
window.onresize = function(){
    throttle(reszie);
};

/* 巧妙方法 */
/**
 * 节流函数(简易)
 * @param now 当前毫秒值
 * @param method 方法
 * @param context 上下文
 */
function throttle(now, method, context){
    var time = +new Date();
    throttle = function(now, method, context){
        if(now - time > 1000){
            time = now;
            method.call(context);
        }
    };
    throttle(now, method, context);
}

function reszie(){
    console.log(1);
}
window.onresize = function(){
    throttle(+new Date(), reszie, null);
};