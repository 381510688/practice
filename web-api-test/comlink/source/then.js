var target = new Promise((reslove, reject) => {
  return reslove({a: 1})
})
let res = new Proxy(target, {
  get(_target, prop) {
    console.log(prop)
    return Reflect.get(_target, prop)
    // return Reflect.get(_target, prop).bind(_target);
  }
})

await res
