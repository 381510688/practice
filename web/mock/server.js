/**
 * Created by ligang on 2017/8/22.
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
var jsonfile = require('jsonfile')

jsonfile.spaces = 4

const app = new Koa()
app.use(bodyParser())
const router = Router()
app.use(router['routes']())

app.use(async (ctx) => {
  let filePath = path.join(__dirname, ctx.request.path.replace('/api/', '').replace('/query', '').replace('/delete', ''))
  let data

  if (fs.existsSync(filePath)) {
    data = jsonfile.readFileSync(filePath + '.json')
  } else {
    data = require(filePath).data
  }
  ctx.set('Content-Type', 'application/json')
  ctx.body = data
})
app.listen(3000)
console.log('localhost:3000 listen!!!')
