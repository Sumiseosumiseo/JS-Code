const puppeteer = require('puppeteer');

async function main(){
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    const response = await page.goto('https://react-image-compressor.netlify.app/');
    console.log(await response.text());
    
    const renderedContent = await page.content()
    console.log({ renderedContent })

    const extractedData = await page.$eval('html', e => e.outerHTML)
    console.log({ extractedData })

    await browser.close();
}
main ();