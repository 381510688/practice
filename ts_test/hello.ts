
function greeter(p: Person) {
    return `${p.name}-${p.age}`
}

interface Person {
    name: string
    age: number
}

class Stundent {
    info: string
    constructor(public name, public age) {
        this.info = `${name} - ${age}`
    }
}

greeter(new Stundent('ligang', 29))


let notSure: any
notSure = 10
notSure = true
// notSure.ifItExists()


enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green
let cn: string = Color[2]
console.log(c, cn)