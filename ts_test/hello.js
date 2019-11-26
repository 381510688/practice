function greeter(p) {
    return p.name + "-" + p.age;
}
var Stundent = /** @class */ (function () {
    function Stundent(name, age) {
        this.name = name;
        this.age = age;
        this.info = name + " - " + age;
    }
    return Stundent;
}());
greeter(new Stundent('ligang', 29));
var notSure;
notSure = 10;
notSure = true;
// notSure.ifItExists()
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var cn = Color[2];
console.log(c, cn);
