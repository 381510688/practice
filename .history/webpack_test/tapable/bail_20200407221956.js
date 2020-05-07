const { SyncBailHook, AsyncParallelBailHook } = require('tapable')

const mySyncBailHook = new SyncBailHook(['name'])
mySyncBailHook.tap('mySyncBailHook1', name => {
  console.log(name)
})
mySyncBailHook.tap('mySyncBailHook2', name => {
  console.log(name)
})
mySyncBailHook.call()