const puppeteer = require ('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const [page] = await browser.pages();
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
    await page.setViewport({
        width: 1200,
        height: 700,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true,
    });
    const iPhone = puppeteer.devices['iPhone 6'];
    await page.emulate(iPhone);
    await page.goto('https://www.whatsmyua.info/');
    await page.screenshot({ path: 'data\\iPhohex-user-agent.png' });

  await page.goto('https://whatismyviewport.com/');
 await page.screenshot({ path: 'data\\iPhonex-viewport-size.png' });
  await browser.close();
})();