/**
 * Created by ligang on 17/5/18.
 */
var a = 1;
function f1() {
    var a  = 2;
    function f2() {
        console.log(this.a);
    }
    f2();
}
f1();



var o = {
    myVal: 'hello',
    fn: function() {
        var self = this;
        function inner() {
            console.log(self.myVal);
        }
        inner();
    }
};
o.myVal();



var obj = {
    name: '对象obj',
    f: function() {
        return this;
    }
};
obj.o1 = {
    name: '对象o1',
    me: obj.f   // 引用对象obj的方法f
};
obj.o2 = {
    name: '对象o2',
    me: obj.f() // 调用对象obj的方法f
};
console.log(obj.o1.me().name); // 对象o1
console.log(obj.o2.me.name);   // 对象obj