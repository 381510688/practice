var obj = {
  a: 1
}
var objP = new Proxy(obj, {
  get (target, property, receiver) {
    return target[property] + 1
  },
  set (target, prop, value) {
    console.log(1)
    Reflect.set(target, prop, value + 1)
  }
})
console.log(`objP.a=${objP.a}`)
objP.b = 1
console.log(`obj.b=${obj.b}`)
console.log(`objP.b=${objP.b}`)



function fn (args) { return args}
var fnP = new Proxy(fn, {
  apply: function(target, thisArg, argumentsList) {
    return target.apply(thisArg, argumentsList)
  }
})
console.log(fnP(123))


class P {
  constructor (name) {
    this.name = name
  }
  sayName () {
    console.log(this.name)
    return this.name
  }
}

const ProxyP = new Proxy(P, {
  construct (target, args) {
    return new target(...args)
  }
})
new ProxyP('LiGang').sayName()

function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function(target, thisArg, args) {
    return target(...args) * 10;
  }
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2))			// 3
console.log(proxy1(1, 2)) 


// https://developer.mozilla.org/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope
/**
 DedicatedWorkerGlobalScope 对象（也就是 Worker 全局作用域）可以通过 self 关键字来访问。
 一些在 worker 全局作用域下不可用的全局函数、命名空间对象以及构造器，也可以通过此对象使用。
 在 JavaScript 参考的 Web Workers 可以使用的函数和类 (en-US)页面中，有列举这些特性。


*/