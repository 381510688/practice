const { SyncBailHook, AsyncParallelBailHook } = require('tapable')

const mySyncBailHook = new SyncBailHook(['name'])
mySyncBailHook.tap('mySyncBailHook1', 'ligang')
mySyncBailHook.tap('mySyncBailHook2', 'ligang2')
mySyncBailHook.call()