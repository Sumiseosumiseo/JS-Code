//expose function
const puppeteer = require('puppeteer');
const prompt = require('prompt');

function getFromPromptjs() {
    console.log('browser asking for some data')
    //ask data from user
    const url = prompt.getURL('http://example.com/')
    //return the data to browser
    return url
}

function pushTheLink() {
    pushToData(location.href)
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.exposeFunction('getFromPromptjs', getFromPromptjs);
    await Promise.all(
        page.waitForNavigation({ waitUntil: 'networkidle2' }), // The promise resolves after navigation has finished

    );

    await page.evaluate(async () => {
        const url = await getFromPromptjs()
        window.location(url)
    });

    const pageContent = await page.content()

    //await browser.close();

    console.log(pageContent);

})();