const compiler = require('vue-template-compiler')

const result = compiler.compile(`
  <div id="test">
    <div data-1>
      <p data-2>This is my vue render test</p>
    </div>
    <p data-3>my name is {{myName}}</p>
  </div>`
)

const parseComponents = compiler.parseComponent(
  `<template>
    <div class="example">{{ msg }}</div>
  </template>

  <script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
  </script>

  <style>
    .example {
      color: red;
    }
  </style>

  <custom1>自定义块</custom1>`
)

// console.log(parseComponents)

const frames = compiler.generateCodeFrame(
  `<template>
    <div class="example">{{ msg }}</div>
  </template>

  <script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
  </script>

  <style>
    .example {
      color: red;
    }
  </style>

  <custom1>自定义块</custom1>`
, 15, 20)
console.log(frames)