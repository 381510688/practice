const { SyncWaterfallHook, AsyncSeriesWaterfallHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new AsyncSeriesWaterfallHook(['name'])
    }
  }
  tap () {
    this.hooks.compiler.tapAsync('consumer1', (name) => {
      console.log(name)
      // return undefined
      return 1
    })
    this.hooks.compiler.tapAsync('consumer2', (name) => {
      console.log(name)
    })
  }
  call () {
    this.hooks.compiler.callAsync('ligang')
  }
}
const t = new Test()
t.tap()
t.call()