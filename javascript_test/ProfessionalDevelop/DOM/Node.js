/**
 * Created by ligang on 16/10/28.
 */
var someNode = document.body;
if(someNode.nodeType === 1){
    console.log("Node is an element");
    var name = someNode.nodeName,
        value = someNode.nodeValue;
    console.log(name, value);
}

// <div id="content">
//     <p>李刚</p>
//     <p>ligang</p>
//     <p>http://blog.csdn.net/ligang2585116</p>
// </div>
var div = document.getElementById("content");
console.log(div.hasChildNodes());   // true
console.log(div.ownerDocument);     // #document

var children = div.childNodes;
console.log(children[0]);       // <p>李刚</p>
console.log(children.item(1));  // <p>ligang</p>

var p1 = div.firstChild;
console.log(p1.parentNode);         // <div id=​"content">​…​</div>​
console.log(p1.previousSibling);    // null
console.log(p1.nextSibling);        // <p>ligang</p>
