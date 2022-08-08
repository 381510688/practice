// ReadonlyArray
let ary: Array<number> = [1,2,3]
let rAry: ReadonlyArray<number> = ary;
// ary = rAry
ary = rAry as number[];
ary.push(4)

// keyof T，索引类型操作符。对于任何类型T，keyof T的结果为T上已知的公共属性名的联合。
interface User {
  name: String,
  age: Number
}

type UserKey = keyof User;
function getUserProp (user: User, key: UserKey):User[UserKey] {
  return user[key]
}
getUserProp({name: 'ligang', age: 32}, 'name')

function getProp<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
  return obj[key]
}
getProp({name: 'ligang', age: 32}, 'name')

// 可索引类型
interface StringArray {
  // 定义索引key为number类型，索引值为string类型
  [index: number]: string
}
let a: StringArray = ['a', 'b', 'c'];
let b: StringArray = {0: 'hello', 1: 'world'}
console.log(a, b)

class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}
interface Samo {
  [x: string]: Animal,
  [x: number]: Dog
}
let sm: Samo = {
  'a': new Animal(),
  123: new Dog()
}

