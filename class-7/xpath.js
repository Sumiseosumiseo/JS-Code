const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const [page] = await browser.pages();
    await page.goto('http://example.com/');
    await page.setContent('<a href="/test">Test</a>');
    
    // await browser.close();

})();