const puppeteer = require('puppeteer');
const { getPageEmails, getContactPages } = require('/lib.js');
const websites = require('data/website-links.json');

async function main() {
    const browser = await puppeteer.launch({
        headless: false,
    });
    async function getEmails(page, link) {
        await page.goto(link);
        console.log(link);
        const emails = await page.evalute(getPageEmails);
        if (emails.length) {
            return emails;

        } else {
            const contactPages = await page.evalute(getContactPages);
            for (let contactPage of contactPage) {
                await page.goto(contactPage);
                console.log(contactPage);
                const emails = await page.evalute(getPageEmails);
                if (emails.length) {
                    return emails;

                }
            }

        }
        return [];
    }
    for (let link of websites) {
        const page = await browser.newPage();
        const emails = await getEmails(page, link);
        console.log({ emails });
        await page.close();
    }
    await browser.close();

}
main();