const puppeteer = require('puppeteer-core')
async function main() {
    const browser = await puppeteer.connect({
        browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser/34f898d5-5c5c-48b4-912e-2184f89d3535',
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');
    await browser.close();

}
main();