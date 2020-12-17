const fs = require('fs-extra')

fs.ensureFile('./a/c.txt')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})