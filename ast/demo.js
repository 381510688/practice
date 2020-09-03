const { parse, traverse } = require('@babel/core')

let ast = parse(`
function add (a, b) {
  return a + b
}`)

// console.log(JSON.stringify(ast))

const MyVisitor = {
  // 树中的每个 Identifier 调用 Identifier() 方法
  Identifier() {
    console.log("Called!");
  }
}

traverse(ast, {
  ...MyVisitor
})