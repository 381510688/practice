importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const comput = {
  add (num1, num2) {
    return Number(num1) + Number(num2);
  },
  sub (num1, num2) {
    return Number(num1) - Number(num2);
  }
}

Comlink.expose(comput)