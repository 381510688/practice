const { SyncWaterfallHook, AsyncSeriesWaterfallHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new SyncWaterfallHook(['name'])
    }
  }
  tap () {
    this.hooks.compiler.tap('consumer1', (name) => {
      console.log(name)
      return undefined
      // return 1111
    })
    this.hooks.compiler.tap('consumer2', (prev) => {
      console.log(prev)
      return 2222
    })
  }
  call () {
    this.hooks.compiler.call('ligang')
  }
}
const t = new Test()
t.tap()
t.call()

// class Test {
//   constructor () {
//     this.hooks = {
//       compiler: new AsyncSeriesWaterfallHook(['name'])
//     }
//   }
//   tapAsync () {
//     this.hooks.compiler.tapAsync('consumer1', (name, next) => {
//       console.log(name)
//       next(2)
//       return undefined
//       // return 1111
//     })
//     this.hooks.compiler.tapAsync('consumer2', (name, next) => {
//       console.log(name)
//       next(1)
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
// t.callAsync()