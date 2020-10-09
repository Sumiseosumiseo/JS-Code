const puppeteer = require('puppeteer');
async function getXpathData(browser, xml, xpath) {
  const page = await browser.newPage()
  await page.setContent(xml)

  const productsHandles = await page.$x(xpath)
  const data = await Promise.all(
    productsHandles.map((handle) =>
      page.evaluate((element) => element.innerText, handle)
    )
  );
  await page.close();
  return data;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const [page] = await browser.pages();
  const response = await page.goto('https://www.mollyjogger.com/sitemap.xml');
  const xml = await response.text()
  const productsLink = await getXpathData(browser, xml, '//loc')
  console.log({ productsLink });
  await browser.close();

})();