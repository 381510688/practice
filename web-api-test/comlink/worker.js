importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

function add (num1, num2) {
  return Number(num1) + Number(num2)
}

Comlink.expose(add);

