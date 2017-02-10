var worker = new Worker("sub.js");
// 创建worker对象
worker.addEventListener("message", function(e){
    // 接收sub消息
    console.log(e.data);
});
// 给sub发送消息
worker.postMessage("football");
worker.postMessage("baseball");
