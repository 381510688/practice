const { SyncWaterfallHook, AsyncSeriesWaterfallHook } = require('tapable')

// class Test {
//   constructor () {
//     this.hooks = {
//       compiler: new SyncWaterfallHook(['name'])
//     }
//   }
//   tap () {
//     this.hooks.compiler.tap('consumer1', (name) => {
//       console.log(name)
//       return undefined
//       // return 1111
//     })
//     this.hooks.compiler.tap('consumer2', (prev) => {
//       console.log(prev)
//       return 2222
//     })
//   }
//   call () {
//     this.hooks.compiler.call('ligang')
//   }
// }
// const t = new Test()
// t.tap()
// t.call()

// class Test {
//   constructor () {
//     this.hooks = {
//       compiler: new AsyncSeriesWaterfallHook(['name'])
//     }
//   }
//   tapAsync () {
//     this.hooks.compiler.tapAsync('consumer1', (name, callback) => {
//       console.log(name)
//       callback(null, 2)
//     })
//     this.hooks.compiler.tapAsync('consumer2', (name, callback) => {
//       console.log(name)
//       callback(1)
//     })
//   }
//   callAsync () {
//     this.hooks.compiler.callAsync('ligang', (name) => {
//       console.log('over', name)
//     })
//   }
// }
// const t = new Test()
// t.tapAsync()
// t.callAsync()

class Test {
  constructor () {
    this.hooks = {
      compiler: new AsyncSeriesWaterfallHook(['name'])
    }
  }
  tapPromise () {
    this.hooks.compiler.tapPromise('consumer1', (name, callback) => {
      return new Promise((resolve, reject) => {
        console.log(name)
        resolve(2)
      })
      
    })
    this.hooks.compiler.tapPromise('consumer2', (name, callback) => {
      console.log(name)
      callback(1)
    })
  }
  promise () {
    this.hooks.compiler.promise('ligang', (name) => {
      console.log('over', name)
    })
  }
}
const t = new Test()
t.tapPromise()
t.promise()