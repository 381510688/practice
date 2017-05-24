/**
 * Created by ligang on 17/5/24.
 */

var divs = document.getElementsByClassName('js-div');
var divsLen = divs.length;
console.log(divs.length, divsLen);	// 3
// 创建新的DIV
var newDiv = document.createElement('div');
newDiv.innerHTML = '4';
newDiv.setAttribute('class', 'js-div');
document.body.appendChild(newDiv);
// 新增添的div并统计到了集合中
console.log(divs.length, divsLen);   // 4


var divs = document.getElementsByTagName('div');
// for(var i = 0, len = divs.length; i < len; i++) {
for(var i = 0; i < divs.length; i++) {
    document.body.appendChild(document.createElement('div'));
}

