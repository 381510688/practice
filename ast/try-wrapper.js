const fs = require('fs')
const { parse, traverse, types: t } = require('@babel/core')

let code = fs.readFileSync('./2.js', { encoding: 'utf-8' })
let ast = parse(code)
// console.log(ast)

// 判断箭头函数
const isAsyncFuncNode = node => {
  t.isFunctionDeclaration(node, { async: true })
    || t.isArrowFunctionExpression(node, { async: true })
    || t.isFunctionExpression(node, { async: true })
    || t.isObjectMethod(node, { async: true })
}

traverse(ast, {
  // AwaitExpression: { enter() {}  }
  FunctionDeclaration(path) {
    console.log(path.node.id.name)
    console.log(path)
  }
})



