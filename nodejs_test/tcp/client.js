var net = require('net')
var client = new net.Socket()
client.setEncoding('utf8')
client.connect(8431, 'localhost', () => {
    console.log('已连接到tcp服务器')
    client.write('你好')
    setTimeout(() => {
        client.end('再见！')
    }, 3000)
})
client.on('data', (data) => {
    console.log(`收到服务器数据${data}`)
})