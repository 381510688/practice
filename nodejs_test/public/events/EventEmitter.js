var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
// 监听事件
emitter.on("myCustomerEvent", function(message) {
    console.log(message);
});
// 获取指定事件的 listeners 个数
console.log(emitter.listenerCount("myCustomerEvent"));
// 触发事件
emitter.emit("myCustomerEvent", "ligang");
