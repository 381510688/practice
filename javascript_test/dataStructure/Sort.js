
var dataNumbers = 10000;
var datas = [];
for(var i = 0; i < dataNumbers; i++) {
    datas.push(Math.floor(Math.random() * dataNumbers) + 1);
}

/**
 * 交换数组中两个值
 * @param ary
 * @param i
 * @param j
 */
function swap(ary, i, j) {
    var temp = ary[i];
    ary[i] = ary[j];
    ary[j] = temp;
}

/**
 * 冒泡排序
 * @param dataAry
 * @returns {*}
 */
function bubbleSort(dataAry) {
    var len = dataAry.length;
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < len - i; j++) {
            if(dataAry[j] > dataAry[j+1]) {
                swap(dataAry, j, j+1);
            }
        }
    }
    return dataAry;
}

// 测试
var start = + new Date();
bubbleSort([].concat(datas));
console.log("bubbleSort:", + new Date() - start);

/**
 * 选择排序
 * @param dataAry
 */
function selectionSort(dataAry) {
    var len = dataAry.length;
    for(var i = 0; i < len - 1; i++) {
        for(var j = i + 1; j < len; j++) {
            if(dataAry[i] > dataAry[j]) {
                swap(dataAry, i , j);
            }
        }
    }
    return dataAry;
}

// 测试
var start = + new Date();
selectionSort([].concat(datas));
console.log("selectionSort:", + new Date() - start);

/**
 * 插入排序
 * @param dataAry
 */
function insertionSort(dataAry) {
    var temp, inner;
    for(var outer = 1, len = dataAry.length; outer < len; outer++) {
        temp = dataAry[outer];
        inner = outer;
        while(inner > 0 && (dataAry[inner - 1] >= temp)) {
            dataAry[inner] = dataAry[inner - 1];
            inner--;
        }
        dataAry[inner] = temp;
    }
}

// 测试
var start = + new Date();
insertionSort([].concat(datas));
console.log("insertionSort:", + new Date() - start);


/**
 * 希尔排序
 * @param dataAry 数据数组
 * @param gaps    间隔数组
 */
function shellSort(dataAry, gaps) {
    var temp, inner, currentGap;
    // 遍历间隔
    for(var g = 0, gLen = gaps.length; g < gLen; g++) {
        // 当前间隔
        currentGap = gaps[g];
        // 直接插入法外循环
        for(var outer = currentGap, len = dataAry.length; outer < len; outer++) {
           temp = dataAry[outer];
           inner = outer;
           // 直接插入法内循环（注意对比间隔值）
           while(inner >= currentGap && (dataAry[inner - currentGap] >= temp)) {
               dataAry[inner] = dataAry[inner - currentGap];
               inner = inner - currentGap;
           }
           dataAry[inner] = temp;
        }
    }
    return dataAry;
}

// 测试
var start = + new Date();
shellSort([].concat(datas), [3, 2, 1]);
console.log("shellSort", + new Date() - start);

var count= 0;
/**
 * 归并排序（递归）
//  * @param dataAry
//  */
// function mergeSort(dataAry) {
//     count++;
//     if(dataAry.length === 1) {
//         return dataAry;
//     }
//     var mid = Math.floor(dataAry.length/2);
//     var leftAry = dataAry.slice(0, mid);
//     var rightAry = dataAry.slice(mid);
//     return merge(mergeSort(leftAry), mergeSort(rightAry));
// }
// function merge(leftAry, rightAry) {
//     var result = [];
//     while(leftAry.length > 0 && rightAry.length > 0) {
//         if(leftAry[0] < rightAry[0]) {
//             result.push(leftAry.shift());
//         }else {
//             result.push(rightAry.shift());
//         }
//     }
//     return result.concat(leftAry).concat(rightAry);
// }
// var dataAry = [5, 4, 3, 7, 1, 2, 8, 6, 9];
// console.log(mergeSort(dataAry));
// console.log(count);

/**
 * 归并排序（迭代）
 * @param dataAry
 */
function mergeSort(dataAry) {
    if(dataAry.length < 2) {
        return dataAry;
    }
    var step = 1; // 控制子序列大小
    var left, right; // 左、右下标
    while(step < dataAry.length) {
        left = 0;
        right = step;

        while((right + step) <= dataAry.length) {
            mergeArrays(dataAry, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        // 不能被分组的元素
        if(right < dataAry.length) {
            mergeArrays(dataAry, left, left+step, right, dataAry.length);
        }
        step = step * 2;
    }
    return dataAry;
}

/**
 * 包含头，不包含尾
 * @param ary
 * @param startLeft
 * @param endLeft
 * @param startRight
 * @param endRight
 */
function mergeArrays(ary, startLeft, endLeft, startRight, endRight) {
    var leftAry = new Array(endLeft - startLeft + 1),
        rightAry = new Array(endRight - startRight + 1);

    var k = startLeft;
    for(var i = 0; i < (leftAry.length - 1); i++) {
        leftAry[i] = ary[k];
        k++;
    }
    leftAry[leftAry.length - 1] = Infinity; // 哨兵值

    k = startRight;
    for(var j = 0; j < (rightAry.length - 1); j++) {
        rightAry[j] = ary[k];
        k++;
    }
    rightAry[rightAry.length - 1] = Infinity; // 哨兵值

    // 对比左右元素大小
    var m = 0, n = 0;
    for(var k = startLeft; k < endRight; k++) {
        if(leftAry[m] <= rightAry[n]) {
            ary[k] = leftAry[m];
            m++;
        }else {
            ary[k] = rightAry[n];
            n++;
        }
    }
}

// 测试
var start = + new Date();
mergeSort([].concat(datas));
console.log("mergeSort", + new Date() - start);


/**
 * 快速排序
 * @param dataAry
 * @returns {Array}
 */
function quickSort(dataAry) {
    if(dataAry.length === 0) {
        return [];
    }
    var left = [], right = [];
    var pivot = dataAry[0];
    for(var i = 1; i < dataAry.length; i++) {
        dataAry[i] < pivot ? left.push(dataAry[i]) : right.push(dataAry[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// 测试
var start = + new Date();
quickSort([].concat(datas));
console.log("quickSort", + new Date() - start);


function quickSort2(arr, left, right) {
    if (left > right) return;
    var temp,
        i = left,
        j = right;
    // 设基准值
    var pivot = arr[left];
    while (i != j) {
        // 先从右侧开始(找到小于基值的第一个数据)
        while (i < j && arr[j] >= pivot) {
            j--;
        }
        // 然后从左侧开始(找到大于基值的第一个数据)
        while (i < j && arr[i] <= pivot) {
            i++;
        }
        // 交换数据上述两个元素，继续查找，直到i和j相遇
        if (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // 将基值与相遇数据进行交换<确保了基值位于元素中央位置>
    temp = arr[i];
    arr[i] = arr[left];
    arr[left] = temp;

    console.log(arr);

    // 基值左侧数组按上述方式递归执行
    quickSort2(arr, left, i - 1);
    // 基值右侧数组按上述方式递归执行
    quickSort2(arr, i + 1, right);
    return arr;
}
// 测试
datas = [5, 4, 3, 7, 1, 2, 8, 6, 9];
var start = + new Date();
console.log(quickSort2([].concat(datas), 0, datas.length - 1));
console.log("quickSort2", + new Date() - start);


/** 
 * 计数排序
 * @params dataAry
 */
function countSort(dataAry) {
    // 获取最大数，并创建数组
    var maxNumber = Math.max.call(undefined, ...dataAry)
    var countArray = new Array(maxNumber+1).fill(0)
    // 填充统计数组
    for (let data of dataAry) {
        countArray[data]++
    }
    // 遍历统计结果数组
    var sortedArray = new Array(dataAry.length)
    var index = 0
    for (let i = 0, len = countArray.length;i < len; i++) {
        for (let j = 0; j < countArray[i]; j++) {
            sortedArray[index++] = i
        }
    }
    return sortedArray
}
// 测试
var start = + new Date();
countSort([].concat(datas));
console.log("countSort", + new Date() - start);