
const required = ['key', 'type', 'default']
const allowed = [...required, 'description', 'name']

class Definition {
  constructor (key, def) {
    this.key = key
    console.log(this)
    Object.assign(this, def)
    this.validate()
  }

  validate () {
    for (let req of required) {
      if (!Object.prototype.hasOwnProperty.call(this, req)) {
        throw new Error(`缺失必须属性 ${req}: ${this.key}`)
      }
      for (let field of Object.keys(this)) {
        if (!allowed.includes(field)) {
          throw new Error(`存在未知属性 ${field}: ${this.key}`)
        }
      }
    }
  }
}

const definitions = {}
const define = (key, def) => {
  definitions[key] = new Definition(key, def)
}
define('link', {
  type: Boolean,
  default: null
})
define('user-agent', {
  type: String,
  default: 'npm/{npm-version} node/{node-version} {platform} {arch} workspaces/{workspaces} {ci}',
  description: ' Sets the User-Agent request header. ',
})


console.log(definitions['user-agent'].hasOwnProperty('validate'))
console.log(definitions['user-agent'].__proto__.hasOwnProperty('validate'))
console.log(Definition.prototype)
