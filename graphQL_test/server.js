const Koa = require('koa')
const mount = require('koa-mount')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('koa-graphql')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const KoaStatic = require('koa-static')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(KoaStatic(__dirname + '/'))

// 路由设置test
// router.get('/api/test', (ctx, next) => {
//     ctx.response.type = 'json'
//     ctx.response.body = {
//         content: 'test page'
//     }
// })

var root = {
    user: {
        id: 'BI030',
        tel: '13693390361',
        name: 'ligang',
        age: 29,
        address: '山东'
    },
    role: {
        name: 'admin',
        org: '前端'
    }
}

const schema = buildSchema(
    `type User {
        id: String,
        tel:  String,
        name: String,
        age: String,
        address: String
    }
    type Role {
        name: String,
        org: String
    }
    type Query {
        user: User,
        role: Role
    }`
)

router.all('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.use(router.routes()).use(router.allowedMethods())
app.listen(9999)
console.log('graphQL server listen port: ' + 9999)

/**
 * 参考地址：http://www.zhaiqianfeng.com/2017/06/learn-graphql-first-demo.html
*/