const {stat} = require('fs')

console.log(stat.isDirectory('xxx'))
console.log(stat.isDirectory('xxx/x1'))
console.log(stat.isDirectory('xxx/x1/xx21'))
console.log(stat.isDirectory('中文/x1/xx21'))
console.log(stat.isDirectory('中文/x 1/xx21'))
// console.log(fs.isDirectory('中文/x 1\xx21'))