/**
 * Created by ligang on 17/5/18.
 */

function f() {
    if(this.constructor === arguments.callee) console.log('实例对象');
    else if(this === window) console.log('windwo对象');
    else console.log(`其他对象 constructor = ${this.constructor}`);
}

f();        // windwo对象
new f();    // new f()
f.call(1);  // 其他对象 constructor = function Number() { [native code] }
