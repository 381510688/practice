onmessage = function({ports}) {
  const port2 = ports[0]
  port2.onmessage = function (msgEvent) {
    postMessage(`${msgEvent.data} => worker2`)
  }
}