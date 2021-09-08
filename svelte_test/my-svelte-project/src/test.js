const svelte = require('svelte/compiler')
const fs = require('fs')

const sources = fs.readFileSync('./App.svelte')
const result = svelte.compile(sources.toString())
console.log(result)