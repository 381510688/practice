async function test() {
  let res = await Promise.resolve(123);
  console.log(res);
}