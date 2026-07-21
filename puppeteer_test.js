import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log("Navigating to perler-beads...");
  await page.goto('http://pindou-ecommerce-website.test/category?category=perler-beads', { waitUntil: 'networkidle2' });
  
  console.log("Navigating to tag=NEW...");
  await page.goto('http://pindou-ecommerce-website.test/category?tag=NEW', { waitUntil: 'networkidle2' });

  await browser.close();
})();
