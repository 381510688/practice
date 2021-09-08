const chokidar = require('chokidar');
const isNumber = require('is-number')

console.log(isNumber(123), isNumber('abc'))

chokidar.watch('.').on('all', (event, path) => {
  console.log(event, path);
});