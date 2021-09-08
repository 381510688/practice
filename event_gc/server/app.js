

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.listen(8888, '127.0.0.1');
server.on('listening', () => {
    console.log('开始监听');
});
server.on('connection', () => {
    console.log('客户端建立连接');
});
server.on('timeout', (socket) => {
    console.warn('连接超时了');
});
server.on('request', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url !== '/favicon.ico') {
      req.on('data', (data) => {
        console.log(`服务器端接收到数据：${decodeURIComponent(data)}`)
      })
      req.on('end', () => {
        const querys = url.parse(req.url).query
        const searchParams = new URLSearchParams(querys)
        const fileName = searchParams.get('name')

        const filePath = path.resolve(__dirname, `../images/${fileName}.png`)
        
        setTimeout(_ => {
          const cs = fs.createReadStream(filePath)

          cs.on("data", chunk => {
            res.write(chunk)
          })
          cs.on("end", () => {
            res.end()
          })
        }, parseInt(fileName)*1000)
      })
    }
});
server.on('error', (e) => {
   if(e.code == 'EADDRINUSE') {
       console.error(`地址被占用了 ${e}`)
   } else {
       console.error(`发生错误了 ${e}`)
   }
});
server.on('close', () => {
   console.log('关闭连接');
});