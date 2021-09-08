// import name, * as A from './src/a.js'
// let myName = '李刚'
// console.log(myName, A.name, name)

// import('./src/a.js').then(result => {
//   console.log(result)
//   if (process.env.NODE_ENV === 'production') {
//     console.log(JSONStringify(result))
//   }
// })

import {add} from './src/math.js'

console.log(add(1,2))