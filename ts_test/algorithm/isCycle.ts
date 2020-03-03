interface node<T> {
    next: node<T> | null;
    element: T
}

class LinkedNode<T> implements node<T> {
    element: T
    next: node<T> | null = null
    constructor(element: T, next: node<T> | null = null) {
        this.element = element
        this.next = next
    }
}

class LinkedList<T> {
    length: number = 0
    head: node<T> | null = null
    append(element: node<T>) {
        let node: node<T> = element
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
}

var testLinkedList = new LinkedList<Number>()
testLinkedList.append(new LinkedNode(5))
testLinkedList.append(new LinkedNode(3))
testLinkedList.append(new LinkedNode(7))
const node_2 = new LinkedNode(2)
testLinkedList.append(node_2)
testLinkedList.append(new LinkedNode(6))
testLinkedList.append(new LinkedNode(8))
testLinkedList.append(new LinkedNode(1))
testLinkedList.append(node_2)

function isCycle (head: LinkedNode<Number>) {
  let p1:LinkedNode<Number> = head
  let p2:LinkedNode<Number> = head
  while (p2 != null && p2.next != null) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) return true
  }
  return false
}

function getLoopLen (head: LinkedNode<Number>) {
  let p1:LinkedNode<Number> = head
  let p2:LinkedNode<Number> = head
  let currentLoop = 0
  let counter = 0
  let isStartCount: Boolean = false
  while (p2 != null && p2.next != null) {
    p1 = p1.next
    p2 = p2.next.next
    isStartCount && counter++
    if (p1 === p2) {
      isStartCount = true
      // 相遇两次
      if (++currentLoop === 2) return counter
    }
    
  }
  return false
}

console.log(isCycle(testLinkedList.head))
console.log(getLoopLen(testLinkedList.head))

