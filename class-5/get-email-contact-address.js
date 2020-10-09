const puppeteer = require('puppeteer');
const { getPageEmails, getContactPages } = require('./lib');
const websites = require('data\website-links.json');

function newFunction() {
    return require('lib.js');
}

async function main() {
    const browser = await puppeteer.launch({
        headless: false,
    })
    for (let link of websites) {
        const page = await browser.newPage();
        await page.goto(link);
        await page.close();
    }
    await browser.close();

}
main();