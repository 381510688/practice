/**
 * Created by ligang on 17/1/4.
 */
// require('babel-core/register');
var Koa = require('koa');
const app = new Koa();

/* node --harmony koa2/app.js */
// app.use((ctx, next) => {
//     const start = new Date();
//     return next().then(() => {
//         const ms = new Date() - start;
//         console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//     });
// });
//
// app.use((ctx) => {
//     ctx.body = 'hello world';
// });

/* npm install babel-register babel-plugin-transform-async-to-generator --save
* */


app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    console.log(`${ctx.request.method} ${ctx.request.url} - ${ms}ms`);
    console.log(`${ctx.request.search} ${ctx.request.querystring} - ${ms}ms`)
});

app.use((ctx) => {
    ctx.body = 'hello world';
    // console.log(ctx);
    // console.log(ctx.req);
    // console.log(ctx.res);
});

/* npm install co --save*/
// var co = require('co');
// app.use(co.wrap(function *(ctx, next){
//     const start = new Date();
//     yield next();
//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// }));
// app.use((ctx) => {
//     ctx.body = 'hello world';
// });

app.on('error', (err, ctx) =>
    console.error('server error', err, ctx)
);

app.listen(3000);
