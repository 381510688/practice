/**
 * Created by ligang on 17/5/11.
 */

// <img src=''> 会立即加载，如果src资源过大会导致页面加载受阻。
// 希望先用loading占位，src加载完后替换真正图片。

/* 常规模式 */
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    var img = new Image();
    img.onload = function() {
        imgNode.src = img.src;
    };

    return {
        setSrc: function(src) {
            imgNode.src = "./img/placeholder.jpg";
            img.src = src;
        }
    }
})();
myImage.setSrc("./img/placeholder.jpg");



/* 代理模式 */