/**
 * localStorage方式实现增量更新
 * Created by ligang on 17/8/1.
 */

let localStorage = window.localStorage,
    oldVersion = localStorage.getItem('version') || 0,   // version记录localStorage中存的版本
    newVersion = +document.querySelector('#versionStore').getAttribute('data-version');  // 当前最新版本


let content = null;
if(newVersion > oldVersion) {
    // 内容有更新或第一次加载
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(event){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                content = xhr.responseText;
                updateScript(content); // 更新脚本
                localStorage.setItem('version', newVersion); // 更新本地版本
                localStorage.setItem('a.js', content); // 更新本地内容

            }
        }
    };
    xhr.open("get", "index.js", true);
    xhr.send(null);
} else {
    // 无内容更新
    content = localStorage.getItem('a.js'); // 直接获取本地内容
    updateScript(content)
}

/**
 * 更新页面脚本
 * @param content 脚本内容
 */
function updateScript(content) {
    let script = document.createElement('script');
    script.innerHTML = content;
    document.body.appendChild(script);
    script = null;
}