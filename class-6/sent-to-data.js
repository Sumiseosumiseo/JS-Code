//expose function
const puppeteer = require('puppeteer');
const data = [];

function pushToData(link) {
    return data.push(link)
}

function pushTheLink() {
    pushToData(location.href)
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.exposeFunction('pushToData', pushToData);
    await page.evaluate(pushTheLink); // window.pushToData(location.href)
    await browser.close();
    console.log(data);

})();