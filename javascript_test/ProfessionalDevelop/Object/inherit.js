/**
 * Created by ligang on 16/10/14.
 */

/*原型链*/
function Super(){
    this.property = true;
}
Super.prototype.getSuperValue = function(){
    return this.property;
};

function Sub(){
    this.subProperty = false;
}
Sub.prototype = new Super();
Sub.prototype.getSubValue = function(){
    return this.subProperty;
};

var instance = new Sub();
console.log(instance.getSubValue());     // false
console.log(instance.getSuperValue());   // true
console.log(instance.constructor);       // Super
console.log(instance instanceof Sub);    // true
console.log(instance instanceof Super);  // true


/* 借用构造函数 */
function Super(name){
    this.name = name;
    this.colors = ["red"];
}

function Sub(name, age){
    // 继承Super
    Super.call(this, name);
    this.age = age;
}

var instance = new Sub("Gavin", 26);
instance.colors.push("blue");
console.log(instance.name, instance.age);   // Gavin 26
console.log(instance.colors);   // ["red", "blue"] 独立的colors副本
console.log(new Sub().colors);  // ["red"] 独立的colors副本


/*组合继承*/
function Super(name){
    this.name = name;
    this.color = ["red"];
}
Super.prototype.sayName = function(){
    console.log(this.name);
};
function Sub(name, age){
    Super.call(this, name);
    this.age = age;
}
Sub.prototype = new Super();
Sub.prototype.sayAge = function(){
    console.log(this.age);
};

var instance1 = new Sub("Gavin", 26);
instance1.color.push("blue");
console.log(instance1.color);   // ["red", "blue"]
instance1.sayName();            // "Gavin"
instance1.sayAge();             // 26

var instance2 = new Sub("Camile", 26);
instance2.color.push("yellow");
console.log(instance2.color);   // ["red", "yellow"]
instance2.sayName();            // "Camile"
instance2.sayAge();             // 26


/*原型式继承*/
function createObj(o){
    function F(){}
    F.prototype = o;    // 对o的一种浅复制
    return new F();
}


/*寄生式继承*/
function createAnother(original){
    var clone = createObj(original);
    clone.sayHi = function(){
        console.log("Hi");
    };
    return clone;
}
var person = {
    name: "LIGANG",
    age: 26
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();













