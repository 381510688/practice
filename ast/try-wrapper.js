const fs = require('fs')
const { transformFromAstSync, parse, traverse, types: t } = require('@babel/core')
const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require('constants')

let code = fs.readFileSync('./1.js', { encoding: 'utf-8' })
let ast = parse(code)

// 判断async函数
const isAsyncFuncNode = node => {
  return t.isFunctionDeclaration(node, { async: true })
    || t.isArrowFunctionExpression(node, { async: true })
    || t.isFunctionExpression(node, { async: true })
    || t.isObjectMethod(node, { async: true })
}

traverse(ast, {
  AwaitExpression(path) {
    // 递归向上找异步函数的 node 节点
    while (path && path.node) {
      let parentPath = path.parentPath
      // 已经包含 try 语句则直接退出
      if (t.isBlockStatement(path.node) && t.isTryStatement(parentPath.node)) {
        return 
      }

      // 确认 async function
      if (t.isBlockStatement(path.node) && isAsyncFuncNode(parentPath.node)) {
        // 创建 tryStatement https://www.babeljs.cn/docs/babel-types#trystatement
        let tryCatchAst = t.tryStatement(
          path.node,
          t.catchClause(t.Identifier('e'), t.BlockStatement(parse(`console.error(e)`).program.body)),
          null
        )
        path.replaceWithMultiple([tryCatchAst])  
        return 
      }
      path = parentPath // 递归
    }
  }
})

let newCode = transformFromAstSync(ast, null, {}).code
console.log(newCode)
