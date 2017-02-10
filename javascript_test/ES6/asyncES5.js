

/*-------------------------*/

let test2 = (() => {
    var _ref = _asyncToGenerator(function* () {
        return yield 1;
    });

    return function test2() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function* test() {
    yield 1;
}
const g = test();
console.log(g.next());
test2().then(value => console.log(value));
