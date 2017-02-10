/**
 * Created by ligang on 16/11/6.
 */

/**
 * 构造函数
 * 基于对象存储数据
 * @constructor
 */
function Dictionary(){
    this.datastore = new Object();
}
Dictionary.prototype = {
    /* 修正constructor */
    constructor: Dictionary,
    /* 统计个数 */
    size: function(){
        return Object.keys(this.datastore).length;
    },
    /* 添加元素,给数组添加属性 */
    add: function(key, value){
        this.datastore[key] = value;
    },
    /* 查找指定key的元素 */
    find: function(key){
        return this.datastore[key];
    },
    /* 移除指定key的元素 */
    remove: function(key){
        delete this.datastore[key];
    },
    /* 显示所有的键值对 */
    showAll: function(){
        for(var key in this.datastore){
            console.log(key + ": " + this.find(key));
        }
    }
};
/* 排序 */
Dictionary.prototype.sort = function(){
    var keys = Object.keys(this.datastore).sort();
    var tempDic = new Dictionary();
    for(var i = 0, len = keys.length; i < len; i++){
        var key = keys[i];
        tempDic.add(key, this.find(key));
    }
    return tempDic;
};