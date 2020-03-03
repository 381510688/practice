function test(data) {
    if (Array.isArray(data)) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            test(item);
        }
    }
    else {
        _do(data);
    }
}
function _do(params) {
    console.log(params);
}
test('start');
test(['1', '2']);
test(['3', ['4', '5']]);
