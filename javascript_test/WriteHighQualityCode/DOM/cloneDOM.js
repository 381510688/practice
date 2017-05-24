/**
 * Created by ligang on 17/5/22.
 */

var contentFragment = document.createDocumentFragment(),
    ul = document.createElement('ul'),
    oli = document.createElement('li'),
    li = null;

for(var i = 0; i < 10; i++) {
    li = oli.cloneNode(false);
    li.innerHTML = i;
    contentFragment.appendChild(li);
}
ul.appendChild(contentFragment);
document.querySelector('body').appendChild(ul);