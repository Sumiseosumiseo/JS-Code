const puppeteer = require('puppeteer')
async function main() {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.wikipedia.org', { waitUntil: 'networkidle2' });

    const text = "mobile editor"
    await page.type('#searchInput', text);
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.click('.pure-button'),
    ]);


    await page.screenshot({ path: 'waitfornav.png' });

    await browser.close()

}
main();