importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

class Comput {
  constructor (name) {
    this.name = name
  }
  add (num1, num2) {
    return Number(num1) + Number(num2);
  }
  sub (num1, num2) {
    return Number(num1) - Number(num2);
  }
}

console.log('workers3', Date.now())

Comlink.expose(Comput)