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
            if (title.includes('Shell')) {
              try {
                title = title.replace(/[\s\/]/g, '-')
                let cfs = fs.createWriteStream(`./dist/${title}.html`)
                cfs.write(content);
              } catch (e) {
                console.error(e)
              }
            }
        }
        done();
    }
});

let tasks = []
try {
  for (let i = 706; i < 4999; i++) {
    
    c.queue({
      uri: `http://c.biancheng.net/view/${i}.html`
    })
  }
} catch (e) {
  console.error(e)
}

