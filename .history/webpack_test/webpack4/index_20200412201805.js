// import name, * as A from './src/a.js'
// let myName = '李刚'
// console.log(myName, A.name, name)

import('./src/a.js').then(result => {
  console.log(result)
})