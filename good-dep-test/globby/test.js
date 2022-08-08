import {globby} from 'globby'
import path from 'path'

// console.log(path.resolve('~'))

;(async function () {
  const paths =  await globby('/Users/ligang/Documents/github/Blog/图片/', {
    expandDirectories: {
      files: ['pnpm', 'npm', '*.jpg'],
      extensions: ['png']
    }
  })
  console.log(paths)
})()
