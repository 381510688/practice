module.exports = function (config) {
  const splitOptions = config.optimization.get('splitChunks')
  console.log(splitOptions)

}