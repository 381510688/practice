import {bar} from './b';
console.log('a.mjs');
console.log(bar);
(() => console.log(1234))()
export let foo = 'foo'
