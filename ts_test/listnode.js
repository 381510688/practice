var LinkedNode = /** @class */ (function () {
    function LinkedNode(element, next) {
        if (next === void 0) { next = null; }
        this.next = null;
        this.element = element;
        this.next = next;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.append = function (element) {
        var node = element;
        if (this.head === null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    };
    return LinkedList;
}());
var testLinkedList = new LinkedList();
testLinkedList.append(new LinkedNode('a'));
testLinkedList.append(new LinkedNode('b'));
testLinkedList.append(new LinkedNode('c'));
// 链表倒叙输出 c b a
// {"length":3,"head":{"next":{"next":{"next":null,"element":"c"},"element":"b"},"element":"a"}}
function printLinkedListReversing(head) {
    var result = [];
    while (head !== null) {
        result.push(head.element);
        head = head.next;
    }
    console.log(result.reverse());
}
function printLinkedListReversing_recursion(head) {
    if (head !== null) {
        if (head.next != null) {
            printLinkedListReversing_recursion(head.next);
        }
        console.log(head.element);
    }
}
// function printLinkedListReversing_recursion(head: node<string>, result: Array<string> = []): Array<string> {
//     if (head !== null) {
//         if (head.next != null) {
//             printLinkedListReversing(head.next, result)
//         }
//         result.push(head.element)
//     }
//     return result
// }
console.log(printLinkedListReversing(testLinkedList.head));
console.log(printLinkedListReversing_recursion(testLinkedList.head));
