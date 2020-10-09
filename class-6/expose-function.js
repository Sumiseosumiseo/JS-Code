//expose function
const puppeteer = require('puppeteer');

const data = [];

function pushToData(link){
    return data.push(link)
}

(async () => {
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.exposeFunction('pushToData', pushToData);
 await page.evaluate(()=> pushToData('https://www.google.com 1'));
 await page.evaluate(()=> pushToData('https://www.google.com 2'));
 await page.evaluate(()=> pushToData('https://www.google.com 3'));
 await browser.close();
 console.log(data);

})();