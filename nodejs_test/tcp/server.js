var net = require('net')
var server = net.createServer((socket) => {
    server.getConnections((err, count) => {
        server.maxConnections = 2
        console.log(`当前存在${count}个客户端连接；其允许最大连接数为${server.maxConnections}`)
    })
    socket.on('data', (data) => {
        console.log(`收到客户端数据${data}`)
        socket.write('Hello')
    })
    socket.on('close', (data) => {
        console.log(`客户端已关闭`)
    })
})

server.listen(8431, 'localhost')
console.log('TCP服务器已创建！')