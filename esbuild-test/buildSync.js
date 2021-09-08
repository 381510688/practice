const esbuild = require('esbuild')

esbuild.buildSync({
  entryPoints: ['src/index.js', 'src/main.js'],
  bundle: true,
  outdir: 'dist/',
  splitting: true,
  format: 'esm'
})