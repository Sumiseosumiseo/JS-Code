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
            ['analytics', 'intercome', 'onesignal'].some(e =>
            interceptedRequest.url().toLowerCase().includes(e)) &&
            interceptedRequest.resourceType() === 'image'
        ) {
            interceptedRequest.abort()
        }
        else {
            interceptedRequest.continue()
        }
    });
    console.time('Tumblr')
    await page.goto('https://www.tumblr.com/explore/photos', { waitUntil: 'networkidle2' });
    console.timeEnd('Tumblr')
    //await browser.close();

})();