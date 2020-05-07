const { SyncBailHook, AsyncParallelBailHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new SyncBailHook(['name'])
    }
  }
  tap () {
    this.hooks.compiler.tap('consumer1', (name) => {
      console.log('consumer1', name)
      return 'consumer1'
    })
    this.hooks.compiler.tap('consumer2', (name) => {
      console.log('consumer2', name)
      return 'consumer2'
    })
  }
  call () {
    this.hooks.compiler.call('ligang')
  }
}
const t = new Test()
t.tap()
t.call()