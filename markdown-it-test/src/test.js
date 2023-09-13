const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()
let result = md.render('# title')

console.log(result)