const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://gallery.echartsjs.com/dep/echarts/map/js/china.js');
  // await page.pdf({path: './ligang2585116.pdf', format: 'A4'});
  const html = await page.content()
  console.log(html)
  fs.writeFile('china.js', html, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  await browser.close();
})();
