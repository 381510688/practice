function add (num1, num2) {
  return Number(num1) + Number(num2)
}

onmessage = function (msgEvent) {
  postMessage({add: add})
}