/**
 * 需要安装babel-preset-es2015 和 babel-preset-react
 * npm install --save react
 * npm install --save react-dom
 * npm install --save babel-preset-es2015
 * npm install --save babel-preset-react
 */
const React = require('react');
const ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello Webpack</h1>, document.querySelector("#wrapper"));