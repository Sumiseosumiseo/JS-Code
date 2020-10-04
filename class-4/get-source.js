const puppeteer = require('puppeteer');

async function main (){
  const browser = await puppeteer.launch({
      headless: false,
  });
  const page = await browser.newPage();
  const response = await page.goto('https://react-image-compressor.netlify.app/');
  console.log(await response.text());
  const renderedContent = await page.content()
  console.log({renderedContent})  
  
  await browser.close();
}
main ();  