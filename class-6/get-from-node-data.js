//expose function
const puppeteer = require('puppeteer');


const data = [];

function getFromNodejs() {
    return 'from nodejs'
}

function pushTheLink() {
    pushToData(location.href)
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.exposeFunction('getFromNodejs', getFromNodejs);
    await page.evaluate(async () => {
        const dataFromNodeJS = await getFromNodejs()
        document.write(dataFromNodeJS)
    });
    const pageContent = await page.content()

    //await browser.close();

    console.log(pageContent);

})();