const { SyncBailHook, AsyncParallelBailHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      arch: new SyncBailHook(['name'])
    }
    tap () {
      this.hooks.arch.tap('consumer1', (name) => {
        console.log(name)
        return undefined
      })
      this.hooks.arch.tap('consumer2', (name) => {
        console.log(name)
      })
    }
    call () {
      this.hooks.arch.call('ligang')
    }
  }
}
const t = new Test()
t.tap()
t.call()