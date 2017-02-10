/**
 * Created by ligang on 16/10/13.
 */

// 数据属性
var person = {
    // name: "ligang"
};
Object.defineProperty(person, "name", {
    configurable: true,
    enumerable: false,
    writable: false,
    value: "lg"
});

console.log(person.name);  // "lg"
for(var prop in person){
    console.log(prop);      // 未执行
}
person.name = "li";
console.log(person.name);  // "lg"


// 访问器属性
var person = {
    _name: "ligang"
};
Object.defineProperty(person, "name", {
    configurable: false,
    enumerable: true,
    set: function(name){
        /* 此处可以做其他操作 */
        this._name = name;
    },
    get: function(){
        /* 此处可以做其他操作 */
        return this._name;
    }
});
console.log(person.name);  // "lg"
for(var prop in person){
    console.log(prop);      // 未执行
}
person.name = "li";
console.log(person.name);  // "lg"
