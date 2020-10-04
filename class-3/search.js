const puppeteer = require('puppeteer')
async function main() {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.wikipedia.org', { waitUntil: 'networkidle2' });
    await page.type('#searchInput', 'mobile editor', { delay: 0 });
    await page.click('.pure-button');

    await page.screenshot({ path: 'type-click.png' });

    await browser.close()

}
main();