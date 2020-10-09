const { default: pQueue } = require('p-queue');
const puppeteer = require('puppeteer');
const queue = new pQueue({ concurrency: 2 });
async function getData(url) {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();
    await page.goto(url);
    const title = await page.title();
    await browser.close();
    return title;
}
queue.add(() => getData('http://example.com/').then(console.log));
queue.add(() => getData('http://example.com/').then(console.log));
queue.add(() => getData('http://example.com/').then(console.log));