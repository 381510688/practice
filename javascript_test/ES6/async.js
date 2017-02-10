function* test() {
    yield 1;
}
const g = test();
console.log(g.next());

/*-------------------------*/

async function test2(){
    return await 1;
}
test2().then(value => console.log(value));