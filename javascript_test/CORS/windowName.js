/**
 * Created by ligang on 17/5/26.
 */

/**
 * 下述用端口
 * 10000表示：domainA
 * 10001表示：domainB
 */
// 当前端口号：10000
var iframe = document.createElement('iframe');
// iframe.style.display = 'none';

var state = 0;
iframe.onload = function() {
    if(state === 1) {
        // console.log(iframe.contentWindow.name)
        console.log(JSON.parse(iframe.contentWindow.name));
        
        iframe.contentWindow.document.write('');
        iframe.contentWindow.close();
        document.body.removeChild(iframe);
    } else if(state === 0) {
        state = 1;
        // iframe.src = 'http://localhost:10000/proxy.html';
        iframe.contentWindow.location = 'http://localhost:10000/proxy.html';
    }
};

iframe.src = 'http://localhost:10001';
document.body.appendChild(iframe);