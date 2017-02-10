/**
 * Created by ligang on 16/10/13.
 */

/* 工厂模式 */
function createPerson(name, age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function(){
        console.log(this.name);
    };
    return obj;
}
var p1 = createPerson("z3", 26);
var p2 = createPerson("l4", 27);


/* 构造函数模式 */
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    };
}
var p1 = new Person("z3", 26);
var p2 = new Person("l4", 27);


/* 原型模式 */
function Person(){}
Person.prototype.name = "lg";
Person.prototype.age = 26;
Person.prototype.sayName = function(){
    console.log(this.name);
};
var p1 = new Person();
p1.name = "z3";
console.log(p1.name);
console.log("name" in p1);
console.log(p1.hasOwnProperty("name"));
delete p1.name;
console.log(p1.name);
console.log("name" in p1);
console.log(p1.hasOwnProperty("name"));

// 判断属性存在于原型中还是对象中
function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}

Object.prototype.hasPrototypeProperty = function(prop){
    return !this.hasOwnProperty(prop) && (prop in this);
};


/* 更简单的原型语法 */
function Person(){}
Person.prototype = {
    name: "lg",
    age: 26,
    friends: ["camile"],
    sayName: function(){
        console.log(this.name);
    }
};
// 修正构造函数指向，不可枚举
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});
var p1 = new Person();
var p2 = new Person();

p1.friends.push("Gavin");
console.log(p1.friends);    // ["camile", "Gavin"]
console.log(p2.friends);    // ["camile", "Gavin"]


/* 组合使用构造函数模式和原型模式 */
function Person(name, age, friends){
    this.name = name;
    this.age = age;
    this.friends = friends || [];
}
Person.prototype.sayName = function(){
    console.log(this.name);
};
var p1 = new Person("Gavin", 26);
var p2 = new Person("Camile", 26);
p1.friends.push(["James"]);
console.log(p1.friends);    // ["James"]
p2.friends.push(["Tom"]);
console.log(p2.friends);    // ["Tom"]


/* 动态原型模式 */
function Person(name, age){
    this.name = name;
    this.age = age;
    // 不存在情况下,才会添加
    if(typeof this.sayName !== "function"){
        Person.prototype.sayName = function(){
            console.log(this.name);
        }
    }
}
var p1 = new Person("Gavin", 26);
p1.sayName();   // "Gavin"
// Person.prototype.sayName不会被执行
var p2 = new Person("Camile", 26);


/* 寄生构造函数模式 */
function Person(name, age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function(){
        console.log(this.name);
    };
    return obj;
}
var p1 = new Person("ligang", 26);
console.log(p1 instanceof Person);
console.log(p1.constructor);
// 如果我们想创建一个具有额外方法的特殊属性，使用上述模式会达到很好的效果！！
function SpecialArray(){
    var ary = new Array();
    ary.push.apply(ary, arguments);
    ary.toPipedString = function(){
        return this.join("|");
    };
    return ary;
}
var colors = new SpecialArray("red", "yellow", "blue");
colors.toPipedString();









