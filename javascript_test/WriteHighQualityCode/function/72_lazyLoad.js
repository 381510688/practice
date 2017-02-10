/**
 * Created by ligang on 16/10/11.
 */

/* 惰性载入 */
function fn(index){
    switch (index){
        case 1:
            fn = function(){
                console.log("Hello");
            };
            break;
        case 2:
            fn = function(){
                console.log("안녕하세요");
            };
            break;
        default:
            fn = function(){
                console.log("你好");
            }
    }
    return fn();
}

fn(2);