const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateDrigins, site-per-process',
        ],
    });
    const [page] = await browser.pages();

    await page.goto('https://www.espn.com/login', { waitUntil: 'networkidle2' });
    await page.waitForSelector('iframe');
    //console.log(await page.frames())

    const elementHnadle = await page.$('iframe');
    const frame = await elementHnadle.contentFrame();
    //console.log({frame});

    await frame.waitForSelector('[type="email"]');
    const emailhandle = await frame.$('[type="email"]');
    await emailhandle.type('iframe@gmail.com');

    await page.screenshot({ path: 'data\\iframe.png' });
    await browser.close();
})();