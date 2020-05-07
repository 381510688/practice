const { SyncWaterfallHook, AsyncSeriesWaterfallHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new AsyncSeriesWaterfallHook(['name'])
    }
  }
  tapAsync () {
    this.hooks.compiler.tapAsync('consumer1', (name, callback) => {
      console.log(name)
      // return undefined
      callback(1)
    })
    this.hooks.compiler.tapAsync('consumer2', (name, callback) => {
      console.log(name)
      callback()
    })
  }
  callAsync () {
    this.hooks.compiler.callAsync('ligang')
  }
}
const t = new Test()
t.tapAsync()
t.callAsync()