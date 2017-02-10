/**
 * Created by ligang on 16/10/11.
 */

/* 函数绑定 */
function bind(fn, context){
    return function(){
        return fn.apply(context, arguments);
    }
}

var handler = {
    message: "Hello",
    handlerClick: function(event){
        console.log(this.message);
    }
};
document.getElementById("btn").addEventListener("click", bind(handler.handlerClick, handler));


/* ES5 bind() */
var handler = {
    message: "Hello",
    handlerClick: function(event, currentDom){
        console.log(this.message);
        // 注意使用event.currentTarget代替this,有可能会有问题
        // 触发a和li会有区别!!!
        /**
         * <li><a></a></li>
         */
        console.log(event.currentTarget);
        console.log(currentDom === event.currentTarget);
    }
};

document.getElementById("btn").addEventListener("click", handler.handlerClick.bind(handler));

document.getElementById("btn").addEventListener("click", function(event){
    handler.handlerClick(event, this);
});
