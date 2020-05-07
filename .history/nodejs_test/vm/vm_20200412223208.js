const vm = require('vm')

let a = 1
const result = vm.runInContext(`a+1`)
console.log(result)