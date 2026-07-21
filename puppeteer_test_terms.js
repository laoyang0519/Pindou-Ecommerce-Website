import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log("Navigating to terms-and-conditions...");
  await page.goto('http://pindou-ecommerce-website.test/terms-and-conditions', { waitUntil: 'networkidle2' });
  
  console.log("Navigating to about-us...");
  await page.goto('http://pindou-ecommerce-website.test/about-us', { waitUntil: 'networkidle2' });

  await browser.close();
})();
