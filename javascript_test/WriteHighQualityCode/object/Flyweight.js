/**
 * Created by ligang on 17/5/18.
 */

function O(x) {
    return function() {
        this.x = x;
        this.get = function() {
            console.log(this.x);
        }
    }
}
var o = new O(1);
var f = new o();
f.get();


function F() {
    this.x = 1;
    return function() {
        return this.x;
    }
}
F.prototype.y = function() {
    console.log("call y");
}

var f = new F();
console.log(f.x);
console.log(F()());
console.log(f.y());