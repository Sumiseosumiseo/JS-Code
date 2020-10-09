const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage()
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
        console.log(interceptedRequest.url(), interceptedRequest.resourceType());
        if (
            interceptedRequest.resourceType() === 'image'
        ) {
            interceptedRequest.abort()
        }
        else {
            interceptedRequest.continue()
        }
    });
    await page.goto('https://www.iana.org/domains/reserved');
    //await browser.close();

})();