/**
 * Created by ligang on 17/6/6.
 * https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
 */
var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type":"text/event-stream",
        "Cache-Control":"no-cache",
        "Connection":"keep-alive",
        "Access-Control-Allow-Origin": '*',
    });
    res.write("retry: 10000\n");

    var interval = setInterval(function () {
        res.write("data: " + (new Date()) + "\n\n");
    }, 1000);

    req.connection.addListener("close", function () {
        clearInterval(interval);
    }, false);

});


server.listen(10086, 'localhost');