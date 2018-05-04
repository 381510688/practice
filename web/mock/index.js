/**
 * Created by ligang on 2018/5/2.
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const Mock = require('mockjs')
const Random = Mock.Random

var jsonfile = require('jsonfile')

const path = require('path')
const fs = require('fs')

const formatDate = require('./util/formatDate.js')

const app = new Koa()
app.use(bodyParser())
const router = Router()

app.use(async (ctx) => {
  // let {url, path} = ctx.request.url
  // let filePath = path.join(__dirname, path.replace('/api/', '').replace('/query', '').replace('/delete', '') + '.json')
  //
  // if (fs.existsSync(filePath)) {
  //   ctx.set('Content-Type', 'application/json')
  //   ctx.body = {
  //     status: 'success',
  //     content: Mock.mock(jsonfile.readFileSync(filePath))
  //   }
  // }

  if(ctx.url === '/users') {
    const template = {
      "content|3": [{
        "key|+1": ["allow", "reject", "unknown"],
        "name|+1": ["允许", "拒绝", "未知"],
        "value|8": [{
          // "key|+10800000": 1508083200000,
          "key|+1": new Array(8).fill(1508083200000).map((item, index, ary) => item + index * 10800000),
          // "name": "@time('@key', 'hh:mm')",
          "name": function() {
            return formatDate.format.call(new Date(this.key), 'yyyy-MM-dd hh:mm')
          },
          "value": "@integer(10, 100)"
        }]
      }]
    }
    ctx.set('Content-Type', 'application/json')
    ctx.body = Mock.mock(template)
  }
})

app.listen(8080)



