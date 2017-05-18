/**
 * Created by ligang on 17/5/18.
 */

var obj = {
    value: 123,
    f: function() {
        console.log(this.value, arguments[1]);
    }
};

var btn = document.getElementById('btn');
// btn.addEventListener('click', obj.f);
btn.addEventListener('click', obj.f.bind(obj, event));

