const babel = require("@babel/core");
const fs = require('fs')

const { parse } = babel


let code = fs.readFileSync('./3.js', { encoding: 'utf-8' })

const ast = parse(code)
console.log(ast)

