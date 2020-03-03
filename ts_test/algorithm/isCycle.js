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
testLinkedList.append(new LinkedNode(5));
testLinkedList.append(new LinkedNode(3));
testLinkedList.append(new LinkedNode(7));
var node_2 = new LinkedNode(2);
testLinkedList.append(node_2);
testLinkedList.append(new LinkedNode(6));
testLinkedList.append(new LinkedNode(8));
testLinkedList.append(new LinkedNode(1));
testLinkedList.append(node_2);
function isCycle(head) {
    var p1 = head;
    var p2 = head;
    while (p2 != null && p2.next != null) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 === p2)
            return true;
    }
    return false;
}
function getLoopLen(head) {
    var p1 = head;
    var p2 = head;
    var currentLoop = 0;
    var counter = 0;
    var isStartCount = false;
    while (p2 != null && p2.next != null) {
        p1 = p1.next;
        p2 = p2.next.next.next;
        isStartCount && counter++;
        if (p1 === p2) {
            isStartCount = true;
            // 相遇两次
            if (++currentLoop === 2)
                return counter;
        }
    }
    return false;
}
console.log(isCycle(testLinkedList.head));
console.log(getLoopLen(testLinkedList.head));
