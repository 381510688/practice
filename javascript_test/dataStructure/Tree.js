/**
 * Created by ligang on 17/3/19.
 */

/**
 * 节点定义
 * @param data 数据
 * @param left 左子树
 * @param right 右子树
 * @constructor
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
Node.prototype.show = function() {
    return this.data;
};


function BST() {
    this.root = null;
}
BST.prototype.insert = function(data) {
    // 待插入节点
    var node = new Node(data, null, null);
    if(this.root === null) {
        this.root = node;
    } else {
        var currentNode = this.root;
        var parent;
        while(true) {
            parent = currentNode;
            if(data < currentNode.data) {
                currentNode = currentNode.left;
                if(currentNode === null) {
                    parent.left = node;
                    break;
                }
            }else {
                currentNode = currentNode.right;
                if(currentNode === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
    return this;
};
BST.prototype.order = function(node, type) {
    switch (type) {
        case "inorder":
            if(node != null) {
               this.order(node.left, type);
               console.log(node.show());
               this.order(node.right, type);
            }
            break;
        case "preorder":
            if(node != null) {
                console.log(node.show());
                this.order(node.left, type);
                this.order(node.right, type);
            }
            break;
        case "postorder":
            if(node != null) {
                this.order(node.left, type);
                this.order(node.right, type);
                console.log(node.show());
            }
            break;
    }
};

/**
 * 获取最小值：左子树的最后一个节点
 */
BST.prototype.getMin = function(node) {
    var currentNode = node || this.root;
    while(currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
};

/**
 * 获取最小值：右子树的最后一个节点
 */
BST.prototype.getMax = function(node) {
    var currentNode = node || this.root;
    while(currentNode.right !== null) {
        currentNode = currentNode.right;
    }
    return currentNode;
};

/**
 * 查找某节点
 * @param data 数据
 */
BST.prototype.find = function(data) {
    var currentNode = this.root;
    while(currentNode !== null) {
        if(data === currentNode.data) {
            return currentNode;
        }
        currentNode = (data < currentNode.data) ?
            currentNode.left : currentNode.right;
    }
    return null;
};

/**
 * 移除指定数据节点
 * @param data
 */
BST.prototype.remove = function(node, data) {
    node = node || this.root;
    if(data === null) {
        // 待删除节点不存在
        return node;
    }
    if(node.data === data) {
        // 无子节点
        if(node.left === null && node.right === null) {
            return null;
        }
        // 只有右节点，无左节点
        if(node.left === null) {
            return node.right;
        }
        // 只有左节点，无右节点
        if(node.right === null) {
            return node.left;
        }
        // 存在两个节点
        var minNode = this.getMin(node.right);
        console.log(minNode);
        node.data = minNode.data;
        node.right = this.remove(node.right, minNode.data);
    }else if( node.data > data) {
        node.left = this.remove(node.left, data);
    }else if( node.data < data){
        node.right = this.remove(node.right, data);
    }
    return node;
};


var bst = new BST();
bst.insert(32).insert(11).insert(2)
    .insert(13).insert(75)
    .insert(66).insert(88);
// bst.order(bst.root, "inorder");
// bst.order(bst.root, "preorder");
// bst.order(bst.root, "postorder");
// console.log(bst.getMin());
// console.log(bst.getMax());

// console.log(bst.find(66));
// console.log(bst.find(99));

console.log(bst.remove(null, 11));