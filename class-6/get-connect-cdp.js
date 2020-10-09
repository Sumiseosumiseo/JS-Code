const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    const client = await page.target().createCDPSession()
    //normal 3G speed
    await client.send('Network.emulateNetworkConditions', {
        'offline': false,
        'downloadThroughput': 750 * 1024 / 8,
        'uploadThroughput': 250 * 1024 / 8,
        'latency': 20
    })
    await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    await page.goto('https://www.tumblr.com/explore/trending',
        { waitUntil: 'networkidle0' });
    //await browser.close();

})();