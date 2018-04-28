/**
 * Created by ligang on 2018/4/26.
 */

let target = {
  a: 1,
  b: 2
}

Object.keys(target).forEach(key => {
  Object.defineProperty(window, key, {
    enumerable: true,
    configurable: true,
    set(val) {
      target[key] = val
    },
    get() {
      return target[key]
    }
  })
})

console.log(a, b)
window.a = 'a'
console.log(target.a, target.b)