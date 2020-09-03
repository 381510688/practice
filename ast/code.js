const { transformFromAstSync, types: t } = require("@babel/core")

// let res = await Promise.reslove('123')
const resVar = t.VariableDeclaration('let', [
  t.VariableDeclarator(
    t.Identifier('res'),
    t.AwaitExpression(t.CallExpression(
      t.MemberExpression(t.Identifier('Promise'), t.Identifier('resolve')),
      [t.numericLiteral(123)]
    ))
  )
])

// console.log(res)
const consoleExpress = t.ExpressionStatement(t.CallExpression(
  t.MemberExpression(t.Identifier('console'), t.Identifier('log')),
  [t.Identifier('res')]
))

let ast = t.functionDeclaration(
  t.Identifier('test'),
  [],
  t.BlockStatement([
    resVar,
    consoleExpress
  ]),
  false,
  true
)

let code = transformFromAstSync(t.program([ast]), null, {}).code
console.log(code)