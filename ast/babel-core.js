const babel = require("@babel/core");

const { parse } = babel

const ast = parse(`function add (a, b) { return a + b }`)
console.log(ast)

