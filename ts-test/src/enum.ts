// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Red;
console.log(c, typeof c, Color) // 默认从0开始编号

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Red;
console.log(c2, Color2[1]) // 手动赋值

enum Direction {Up = 1, Down, Left, Right}

let {Up, ...res} = Direction
console.log(Up, res)