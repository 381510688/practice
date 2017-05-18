/**
 * Created by ligang on 17/5/18.
 */
Object.prototype.a = 1;
Function.prototype.a = 2;

console.log(Object.a);   // 2 a指向Function构造函数的原型（Object为构造函数）
console.log(Function.a); // 2 a指向Function构造函数的原型
console.log(new Object().a); // 1