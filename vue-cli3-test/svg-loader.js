const compiler = require('vue-template-compiler')
const parse5 = require('parse5')
const fs = require('fs')

// name collection
const iconNameCollection = new Set()

function _traversal (node) {
  if (!node) return
  let {childNodes, nodeName, attrs} = node
  if (nodeName === 'idss-icon-svg') {
    attrs.forEach(({name, value}) => {
      if (name === 'name') {
        iconNameCollection.add(value)
      }
    })
  }
  if (Array.isArray(childNodes) && childNodes.length > 0) {
    childNodes.forEach(childNode => {
      _traversal(childNode)
    })
  }
}


module.exports = function(content) {
  const sfc = compiler.parseComponent(content)
  const templateContent = sfc.template.content
  const ast = parse5.parse(templateContent)
  _traversal(ast)
  console.log(iconNameCollection)
  fs.writeFileSync('./icons.txt', Array.from(iconNameCollection), {charset: 'utf-8'})
}