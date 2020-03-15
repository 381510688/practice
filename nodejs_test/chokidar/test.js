const chokidar = require('chokidar');

chokidar.watch('.').on('all', (event, path) => {
  console.log(event, path);
});