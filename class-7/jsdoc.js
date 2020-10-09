const puppeteer = require('puppeteer');
const getText = require ('.\\jsdoc-import.js')
(async () => {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();
    await getText({limit: 1, selector: 'h1', page});
    await browser.close();
})();