/**
 * Created by ligang on 17/8/18.
 */


/**
 * Promise的问题
 * - this指向问题没有解决
 * - 局部变量需要借助外层的临时变量才能跳跃向后传递
 * - 无法直接跳过中间某些环节
 * - 隐藏错误
 */


/**
 * 基于Promise
 * - 返回Promise
 * - 使⽤用async/await更加语义性
 * - ⽀支持和Arrows一起使⽤用
 * - 不⽤用借助第三⽅方模块
 */


function getPromise(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(delay);
        }, delay * 1000);
    });
}

let exec = async() => {
    let startTime = Date.now(),
        list = [3, 2, 1],
        result = [];
    list.forEach(async (item) => {
        result.push(await getPromise(item));
    });
    console.log(`${result} -- ${Date.now() - startTime}s`);
};

let exec = async () => {
    let startTime = Date.now(),
        list = [3, 2, 1],
        result = [];
    for(let item of list) {
        result.push(await getPromise(item));
    }
    console.log(`${result} -- ${Date.now() - startTime}s`);
};


let exec = async () => {
    let startTime = Date.now(),
        list = [3, 2, 1];
    let promises = list.map(item => {
       return getPromise(item);
    });
    let data = await Promise.all(promises);
    console.log(`${data} -- ${Date.now() - startTime}s`);
};