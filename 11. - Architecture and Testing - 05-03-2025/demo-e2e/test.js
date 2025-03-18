// const { chromium } = require('playwright-chromium');
    import { chromium } from 'playwright-chromium';

 (async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://youtube.com/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
 })()