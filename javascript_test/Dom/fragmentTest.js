/**
 * Created by ligang on 17/4/29.
 */

//
// var containerDom = document.querySelector('.js-container'),
//     contentFragment = document.createDocumentFragment(),
//     itemDom = null;
//
//
// for(let i = 1; i <= 500; i++) {
//     itemDom = document.createElement("li");
//     itemDom.innerText = i;
//     contentFragment.appendChild(itemDom);
// }
// containerDom.appendChild(contentFragment);
//
// containerDom.addEventListener('click', function(e){
//     const target = e.target;
//     if (target.tagName === 'LI') {
//         alert(target.innerHTML);
//     }
// });


const containerDom = document.querySelector('.js-container');

const total = 5000,   // 5000个li
    batchSize = 50,   // 每一个批次执行50个
    batchCount = Math.ceil(total / batchSize); // 批次数
let batchDone = 0;  // 已经完成的批处理个数

/**
 * 批次插入li
 */
function appendItems() {
    let contentFragment = document.createDocumentFragment(),
        itemDom = null;
    for(let i = 1; i <= batchSize; i++) {
        itemDom = document.createElement("li");
        itemDom.innerText = (batchDone * batchSize) + i;
        contentFragment.appendChild(itemDom);
    }
    containerDom.appendChild(contentFragment);
    batchDone++;
    // 调用下一批次
    doBatchAppend();
}

/**
 * 平滑插入各个批次
 */
function doBatchAppend() {
    if (batchDone < batchCount) {
        window.requestAnimationFrame(appendItems);
    }
}

doBatchAppend();

// 绑定事件
containerDom.addEventListener('click', function(e){
    const target = e.target;
    if (target.tagName === 'LI') {
        alert(target.innerHTML);
    }
});