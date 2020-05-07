const { SyncBailHook, AsyncParallelBailHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      arch: new SyncBailHook(['name'])
    }
    tap () {
      this.hooks.arch.tap('t1', (name) => {
        console.log(name)
        return undefined
      })
      this.hooks.arch.tap('t2', (name) => {
        console.log(name)
      })
    }
  }
}


const mySyncBailHook = new SyncBailHook(['name'])
mySyncBailHook.tap('mySyncBailHook1', name => {
  console.log(name)
  return 1
})
mySyncBailHook.tap('mySyncBailHook2', name => {
  console.log(name)
})
mySyncBailHook.call('ligang')