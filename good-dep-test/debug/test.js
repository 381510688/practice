import debug from 'debug'

const log = debug('idss')

log('test1')
log('test2')


fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2))
console.time('fibonacci')
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i))
}
console.timeEnd('fibonacci')



fibonacci = (function () {
  let _caches = Object.create(null)
  return function (n) {
    if (!_caches[n]) 
      _caches[n] = n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
    return _caches[n]
  }
})()
console.time('fibonacci closure')
for (let i = 0; i < 50; i++) {
  console.log(fibonacci(i))
}
console.timeEnd('fibonacci closure')



const memoize = fn => new Proxy(fn, {
  _cache: new Map(),
  apply(target, thisArg, argumentsList) {
    let key = argumentsList.toString()
    if (!this._cache.has(key)) 
      this._cache.set(key, target.apply(thisArg, argumentsList))
    return this._cache.get(key)  
  }
})
fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2))
const memoizedFibonacci = memoize(fibonacci);
console.time('fibonacci proxy')
for (let i = 0; i < 10; i++) {
  console.log(memoizedFibonacci(i))
}
console.timeEnd('fibonacci proxy')