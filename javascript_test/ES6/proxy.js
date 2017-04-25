/**
 * Created by ligang on 17/4/20.
 */


// var obj = {
//     _name: '',
//     prefix: '',
//     get name() {
//         return this.prefix + this._name;
//     },
//     set name(val) {
//         this._name = val;
//     }
// };
//
// obj.name = 'ligang';
// console.log(obj.name);
// obj.prefix = 'hello ';
// console.log(obj.name);


// let obj = {
//     foo: 1,
//     bar: 2
// };

// let p = new Proxy(obj, {
//     has(target, propKey) {
//         console.log(`检查属性${propKey}是否在目标对象中`);
//         return propKey in target;
//     }
// });
// 'foo' in p;


// Object.preventExtensions(obj);
// let p2 = new Proxy(obj, {
//     has(target, propKey) {
//         console.log(`检查属性${propKey}是否在目标对象中`);
//         return false;
//     }
// });
// console.log('foo' in p2);


// let target = {
//     bar: 1
// };
// let handler = {};
//
// let {proxy, revoke} = Proxy.revocable(target, handler);
//
// proxy.foo = 123;
// console.log(proxy.foo, proxy.bar);  // 123
//
// revoke();
// console.log(proxy.bar);


// const obj = {};
// // obj.foo.name = 'foo'; // Uncaught TypeError: Cannot set property 'name' of undefined
//
// const p = new Proxy(obj, {
//     get(target, propKey, receiver) {
//         if(!(propKey in target)) {
//             target[propKey] = obj;
//         }
//         return target[propKey];
//     }
// });
// p.bar.name = 'bar';
// console.log(p.bar.name)


const NOPE = () => {
    throw new Error('Cannot modify the readonly data');
};

function readonly(data) {
    return new Proxy(data, {
        set: NOPE,
        deleteProperty: NOPE,
        setPrototypeOf: NOPE,
        preventExtensions: NOPE,
        defineProperty: NOPE
    })
}
const data = {a: 1};
const readonlyData = readonly(data);

readonlyData.a = 2; // Error: Cannot modify the readonly data
delete readonlyData.a; // Error: Cannot modify the readonly data