const puppeteer = require ('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--disable-extensions-except=C:\\Users\\Sumi\\automation\\classes\\dark-reader',
            '--load-extension=C:\\Users\\Sumi\\automation\\classes\\dark-reader',
          ]
    });
    const [page] = await browser.pages();   
  
    await page.goto('https://www.example.com/');
     await page.screenshot({ path: 'data\\extension.png' });

   await browser.close();
})();