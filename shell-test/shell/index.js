const Crawler = require('crawler');
const fs = require('fs');

const c = new Crawler({
  encoding: null,
  jQuery: false,// set false to suppress warning message.
  callback: (err, res, done) => {
    if (err) {
      console.error(err.stack);
    } else {
      let content = res.body
      let titleReg = /<title>(.*)<\/title>/
      let result = titleReg.exec(content) || [, Data.now()]
      let title = result[1]
      // if (title.includes('Shell')) {
      try {
        title = title.replace(/[\s\/]/g, '-')
        let cfs = fs.createWriteStream(`./dist2/${title}.html`)
        cfs.write(content);
      } catch (e) {
        console.error(e)
      }
      // }
    }
    done();
  }
});

let tasks = []
try {
  for (let i = 64; i < 66; i++) {

    c.queue({
      // uri: `http://c.biancheng.net/view/${i}.html`
      uri: `http://c.biancheng.net/spring_boot/${i}.html`
    })
  }
} catch (e) {
  console.error(e)
}

