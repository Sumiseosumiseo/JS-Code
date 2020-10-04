const puppeteer = require('puppeteer')
async function main() {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.wikipedia.org', { waitUntil: 'networkidle2' });
    await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.5.1.min.js' });
    await page.waitFor(2000);
    await page.evaluate(() => {
        $('a')[0].click()
    });


    await page.screenshot({ path: 'thirdpartyselector.png' });

    await browser.close()

}
main();