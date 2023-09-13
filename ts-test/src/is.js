function isString(content) {
    return typeof content === 'string';
}
function test(value) {
    if (isString(value)) {
        console.log('isString');
        console.log(value.toFixed(2));
    }
}
test('123');
