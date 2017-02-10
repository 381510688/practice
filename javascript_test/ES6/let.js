/**
 * Created by ligang on 16/11/19.
 */
function f() {
    console.log('out');
}
(function() {
    if(false){
        function f() {
            console.log('in');
        }
    }
    f();
}());