const { SyncWaterfallHook, AsyncParallelWaterfallHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new AsyncParallelWaterfallHook(['name'])
    }
  }
  tap () {
    this.hooks.compiler.tapSync('consumer1', (name) => {
      console.log(name)
      // return undefined
      return 1
    })
    this.hooks.compiler.tapSync('consumer2', (name) => {
      console.log(name)
    })
  }
  call () {
    this.hooks.compiler.callSync('ligang')
  }
}
const t = new Test()
t.tap()
t.call()