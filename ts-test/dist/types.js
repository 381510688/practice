let isDone = false;
let list = [1, 2, 3];
let list2 = [4, 5, 6];
// 元组 Tuple
let x = ['1', 2];
// any  不清楚类型
// void 没有任何类型
function sayHello() {
    console.log('say hello ..');
}
// never 类型是任何类型的子类型，也可以赋值给任何类型
function error(message) {
    throw new Error(message);
}
// 类型断言 编译阶段起作用
// “相信我，我知道自己在干什么” =>  TypeScript会假设你，程序员，已经进行了必须的检查。
let someValue = 'this is a string';
let strLen = someValue.length;
let strLen1 = someValue.length;
let strLen2 = someValue.length;
//# sourceMappingURL=types.js.map