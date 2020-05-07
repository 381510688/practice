const { SyncHook, AsyncParallelHook } = require('tapable')

class Test {
  constructor () {
    this.hooks = {
      compiler: new SyncHook(['name'])
    }
  }
  interceptor () {
    this.hooks.compiler.intercept({
      context: true,
      call: (context, args) => {
        context.params = {a: 1, b: 2}
        console.log('call!!!', args)
      }
    }) 
  }
  tap () {
    this.hooks.compiler.tap('consumer', (name) => {
      console.log('consumer1', name)
      return 'consumer1'
    })
  }
  call () {
    this.hooks.compiler.call('ligang')
  }
}
const t = new Test()
t.interceptor()
t.tap()
t.call()
