const puppeteer = require('puppeteer');
const fs = require('fs');


async function main (){
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    const response = await page.goto('https://react-image-compressor.netlify.app/');
    const responseText = await response.text();

    await fs.writeFileSync('data/non-rendered.html', responseText)
    
    const renderedContent = await page.content()
    await fs.writeFileSync('data/rendered.html', renderedContent)

    const extractedData = await page.$eval('html', e=>e.outerHTML)
    await fs.writeFileSync('data/extracted.html', extractedData)

    await page.pdf({path: 'data/page.pdf'});

    await browser.close();
}
main ();