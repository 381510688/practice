const vm = require('vm')

const contextObject = { a: 1 }
vm.createContext(contextObject)

// const result = vm.runInContext('a + 1', contextObject)
// console.log(result)


const result = vm.runInNewContext('a + 1')
console.log(result)