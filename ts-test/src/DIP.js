var Lower1 = /** @class */ (function () {
    function Lower1() {
    }
    Lower1.prototype.work = function () {
        console.log('lower1');
    };
    return Lower1;
}());
var Lower2 = /** @class */ (function () {
    function Lower2() {
    }
    Lower2.prototype.work = function () {
        console.log('lower2');
    };
    return Lower2;
}());
var Upper = /** @class */ (function () {
    function Upper() {
    }
    Upper.prototype.setLower = function (l) {
        this.lower = l;
    };
    // 统一调用
    Upper.prototype.work = function () {
        this.lower.work();
    };
    return Upper;
}());
var u = new Upper();
u.setLower(new Lower1());
u.work();
u.setLower(new Lower2());
u.work();
