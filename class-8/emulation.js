const puppeteer = require ('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const [page] = await browser.pages();
    await page.setUserAgent('Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30')
    await page.setViewport({
        width: 360,
        height: 640,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
    });
    const iPhone = puppeteer.devices['iPhone 6'];
    await page.emulate(iPhone);
    await page.goto('https://www.whatsmyua.info/');
    await page.screenshot({ path: 'data\\iPhohe-user-agent.png' });

  await page.goto('https://whatismyviewport.com/');
//   await page.screenshot({ path: 'data\\iPhone-viewport-size.png' });
  await browser.close();
})();