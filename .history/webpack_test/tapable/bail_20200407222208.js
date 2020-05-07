const { SyncBailHook, AsyncParallelBailHook } = require('tapable')

class myWebpack


const mySyncBailHook = new SyncBailHook(['name'])
mySyncBailHook.tap('mySyncBailHook1', name => {
  console.log(name)
  return 1
})
mySyncBailHook.tap('mySyncBailHook2', name => {
  console.log(name)
})
mySyncBailHook.call('ligang')