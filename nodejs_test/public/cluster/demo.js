var cluster = require("cluster");

if(cluster.isMaster) {
    var coreCount = require("os").cpus().length;
    for(var i = 0; i < coreCount; i++) {
        var worker = cluster.fork();
        worker.send("Hello worker!");
        worker.on("message", function (message) {
            // Node基于worker对象发送自己的消息,命令格式为
            // {cmd: 'online', _queryId: 1, _workerId: 1}
            if(message._queryId) return;
            console.log(message);
        });
    }
}else {
    process.send("Hello, main process!");
    process.on("message", function (message) {
        console.log(message);
    })
}
/**
 * cluster支持并发运行同一脚本,为了尽可能减少线程间的通信开销,线程间分享的状态应该存储在像Redis这样的外部数据库中.
 *
 */