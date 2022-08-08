onmessage = function (msgEvent) {
  let {num1, num2} = msgEvent.data
  postMessage(Number(num1) + Number(num2))
}