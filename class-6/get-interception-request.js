const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage()
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.url().toLowerCase().includes('tumblr')) {
      request.respond({
        status: 200,
        contentType: 'text/plain',
        body: 'You cannot access Tumblr!'
      });
    } else {
      request.continue()
    }
  });
  await page.goto('https://www.tumblr.com/explore/photos',
    { waitUntil: 'networkidle2' });
  //await browser.close();

})();