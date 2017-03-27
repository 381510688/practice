/**
 * Created by ligang on 17/2/23.
 */
// const http = require('http');
// const server = http.createServer(function (request, response) {
//     // 接受请求
//     console.log('接受请求！');
//     response.write('jj');
//     response.end();
// });
//
// server.listen(8888, 'localhost', 511, function(){
//    console.log('开始监听~~~~')
// });

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer();
server.listen(8888, 'localhost');
server.on('listening', () => {
    console.log('开始监听');
});
server.on('connection', () => {
    console.log('客户端建立连接');
});
server.on('timeout', (socket) => {
    console.warn('连接超时了');
    res.end();
});
server.on('request', (req, res) => {
    if(req.url !== '/favicon.ico') {
        req.on('data', (data) => {
            console.log(`服务器端接收到数据：${decodeURIComponent(data)}`);
        });
        req.on('end', () => {
            console.log(req.url);
            console.log(url.parse(req.url));
            console.log(querystring.parse(req.url));

            console.log('客户端请求的数据已全部接收完毕！');
        });
        res.write('Hello World');
        res.end();
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