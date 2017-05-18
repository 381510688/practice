/**
 * Created by ligang on 17/5/10.
 */

var getUrl = function(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if(request.status === 200) {
                resolve(request.responseText);
            }else {
                reject(new Error(request.statusText));
            }
        };
        request.onerror = function() {
            reject(new Error(request.statusText));
        };
        request.send(null);
    });
};

getUrl('http://httpbin.org/get')
    .then(function(data) {
        console.log(data);
    }, function(data) {
        console.error(data);
    });


