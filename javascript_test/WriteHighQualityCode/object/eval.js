/**
 * Created by ligang on 17/5/18.
 */
var JSONString = '{"name":"ligang","age":27}';
var JSONObject = eval("(" + JSONString + ")");
console.log(JSONObject.name);


function testEvalScope() {
    eval('var a = 1');
    console.log(a);
}
testEvalScope();
console.log(typeof a); // undefined

function testEvalScope() {
    window.eval('var a = 1');
    console.log(a);
}
testEvalScope();
console.log(typeof a); // number