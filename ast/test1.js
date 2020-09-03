const recast = require('recast')

let ast = recast.parse(`
  function a () {
    function innerA () {}
  }
  const add = (a, b) => { a + b}
  const sub = (a, b) => { a - b}
`, {
  parser: require("acorn")
})

// console.log(recast)

recast.visit(ast, {
  visitFunctionDeclaration(path) {
    // console.log(path.node.id.name)
    console.log('-----------')
    return false
  },
  visitArrowFunctionExpression(path) {
    // console.log(path.node)
    console.log('......')
    return false
  }
})


// console.log(ast);
