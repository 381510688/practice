module.exports = function (source, map) {
  console.log(source)
  this.callback(
    null,
    `export default function (Component) {
      Component.__docs = ${
        JSON.stringify(source)
      }
    }`,
    map
  )
}