/**
 * 在worker线程中,我们可以做一些耗时较大的计算,但是其计算结果要发送给主线程,由主线程去更新页面.
 * 为什么不在worker线程中直接更新页面呢?
 * 主要是为了保护JavaScript异步抽象概念,使其免受影响.
 * 如果worker对象可以改变页面,最终的下场可能就像java一样,必须将DOM操作代码封装成互斥量和信号量,避免竞争状态.
 * 基于类似情况,worker对象中也看不到全局的window对象和主线程及其他worker线程中的其他任何对象.
 * worker对象只能看到自己的全局对象self,以及self以捆绑的所有东西.
 * 包括:setTimeout,XMLHttpRequest对象等
 */
self.addEventListener("message", function(e){
    self.postMessage(e.data);
});