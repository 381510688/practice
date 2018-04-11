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
  let url = ctx.request.url

  let filePath = path.join(__dirname, ctx.request.path.replace('/api/', '').replace('/query', '').replace('/delete', '') + '.json')

  let data

  if (fs.existsSync(filePath)) {
    console.log(ctx.method, 'request: ' + url)
    if (ctx.method === 'PUT' && url.endsWith('layout.json')) {
      if (filePath.endsWith('layout.json')) {
        jsonfile.writeFileSync(filePath, {
          'status': 'success',
          'content': ctx.request.body
        })
      }
      data = {status: 'success'}
    } else {
      try {
        data = jsonfile.readFileSync(filePath)
      } catch (err) {
        console.error('\n<=====================================>')
        console.error('request: ' + url + ' fail!!!')
        console.error(err)
        console.error('<=====================================>\n')
      };
    }
  } else {
    console.warn('\n<=====================================>')
    console.warn('request: ' + url + ' fail!!!')
    console.warn(filePath + ' not exist!!!!!!!!!!')
    console.warn('<=====================================>\n')
  }
  // response.data=??;
  ctx.set('Content-Type', 'application/json')
  await new Promise(resolve => {
    setTimeout(() => {
      resolve('')
    }, 3000)
  })
  ctx.body = data
})
app.listen(3000)
console.log('localhost:3000 listen!!!')
