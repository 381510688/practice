const { SyncHook, AsyncParallelHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new SyncHook(['name'])
    }
  }
  interceptor () {
    this.hooks.compiler.intercept({
      register: (tap) => {
        console.log('register!!!', tap)
        return tap
      },
      call: (args => {
        console.log('call!!!', args)
      }),
      tap: (tap => {
        console.log('tap!!!', tap)
      }) 
    }) 
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
t.interceptor()
t.tap()
// t.call()

// const mySyncHook = new SyncHook(['name', 'age'])
// mySyncHook.tap('consument1', (name, age) => console.log('consument1', name, age))
// mySyncHook.tap({
//   name: 'consument2', 
//   fn: (name, age) => console.log('consument2', name, age)
// })




// mySyncHook.compile({
//   type: 'sync', 
//   args: ['name', 'age'],
//   interceptors: [],
//   taps: [{
//     name: 'consument3',
//     function (name, age) {
//       console.log('consument3', name, age)
//     }
//   }]
// })

// mySyncHook.call('ligang', 30)
// console.log(mySyncHook)
// console.log(mySyncHook._x.toString())


const myAsyncParallelHook = new AsyncParallelHook(['name', 'age'])
myAsyncParallelHook.tapAsync('consumentAsync1', (name, age, done) => {
  setTimeout(() => {
    console.log('consumentAsync1', name, age)
    done()
  }, 2000);
})
myAsyncParallelHook.tapPromise('consumentAsync2', (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log('consumentAsync2', name, age)
       resolve('tapPromise over')
    }, 1000)
  })
})
myAsyncParallelHook.intercept('register', (tap) => {
  console.log(tap)
})
myAsyncParallelHook.callAsync('ligang', 20, () => {console.log('tapAsync over')})
myAsyncParallelHook.promise('ligang', 30).then(result => console.log(result))