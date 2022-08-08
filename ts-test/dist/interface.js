// ReadonlyArray
let ary = [1, 2, 3];
let rAry = ary;
// ary = rAry
ary = rAry;
ary.push(4);
function getUserProp(user, key) {
    return user[key];
}
getUserProp({ name: 'ligang', age: 32 }, 'name');
function getProp(obj, key) {
    return obj[key];
}
getProp({ name: 'ligang', age: 32 }, 'name');
let a = ['a', 'b', 'c'];
let b = { 0: 'hello', 1: 'world' };
console.log(a, b);
class Animal {
}
class Dog extends Animal {
}
let sm = {
    'a': new Animal(),
    123: new Dog()
};
//# sourceMappingURL=interface.js.map