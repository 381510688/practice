onmessage = function ({data, ports}) {
  const port1 = ports[0]
  port1.postMessage(`${data} => worker1`)
}