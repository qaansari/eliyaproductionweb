import puppeteer from 'puppeteer-core';
import http from 'http';
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const OUTPUT_DIR = 'D:\\Eliya-Production-Website';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Simple static server for dist
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
      
      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.ico': 'image/x-icon',
        '.svg': 'image/svg+xml',
      };

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
        } else {
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
          res.end(content);
        }
      });
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      resolve({ server, port });
    });
  });
}

async function main() {
  const { server, port } = await startServer();
  const url = `http://127.0.0.1:${port}`;
  console.log(`Local test server running at ${url}`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  try {
    const page = await browser.newPage();
    
    // 1. Desktop 1920x1080 Viewport
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 1000));

    console.log('Capturing Desktop Hero...');
    await page.screenshot({
      path: path.join(OUTPUT_DIR, '01-desktop-hero.png'),
    });

    // 2. Desktop About Section
    console.log('Capturing Desktop About...');
    const aboutEl = await page.$('#about');
    if (aboutEl) {
      await aboutEl.screenshot({
        path: path.join(OUTPUT_DIR, '02-desktop-about.png'),
      });
    }

    // 3. Desktop Services Suite
    console.log('Capturing Desktop Services...');
    const servicesEl = await page.$('#services');
    if (servicesEl) {
      await servicesEl.screenshot({
        path: path.join(OUTPUT_DIR, '03-desktop-services.png'),
      });
    }

    // 4. Desktop Flagship Shows
    console.log('Capturing Desktop Flagship Shows...');
    const flagshipEl = await page.$('#flagship');
    if (flagshipEl) {
      await flagshipEl.screenshot({
        path: path.join(OUTPUT_DIR, '04-desktop-flagship-shows.png'),
      });
    }

    // 5. Desktop Portfolio Archive
    console.log('Capturing Desktop Portfolio...');
    const portfolioEl = await page.$('#portfolio');
    if (portfolioEl) {
      await portfolioEl.screenshot({
        path: path.join(OUTPUT_DIR, '05-desktop-portfolio.png'),
      });
    }

    // 6. Desktop WhatsApp Booking Form
    console.log('Capturing Desktop Booking & Contact...');
    const contactEl = await page.$('#contact');
    if (contactEl) {
      await contactEl.screenshot({
        path: path.join(OUTPUT_DIR, '06-desktop-booking-whatsapp.png'),
      });
    }

    // 7. Desktop Full Page
    console.log('Capturing Desktop Full Page...');
    await page.screenshot({
      path: path.join(OUTPUT_DIR, '07-desktop-fullpage.png'),
      fullPage: true,
    });

    // 8. Mobile Viewport (iPhone 14 / modern smartphone: 390x844)
    console.log('Capturing Mobile Viewport...');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto(url, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 800));

    await page.screenshot({
      path: path.join(OUTPUT_DIR, '08-mobile-hero.png'),
    });

    // 9. Mobile Booking Form
    console.log('Capturing Mobile Booking Form...');
    const mobileContactEl = await page.$('#contact');
    if (mobileContactEl) {
      await mobileContactEl.screenshot({
        path: path.join(OUTPUT_DIR, '09-mobile-booking.png'),
      });
    }

    // 10. Mobile Menu Drawer Open
    console.log('Capturing Mobile Menu Drawer...');
    const menuBtn = await page.$('#mobile-menu-btn');
    if (menuBtn) {
      await menuBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({
        path: path.join(OUTPUT_DIR, '10-mobile-menu-drawer.png'),
      });
    }

    console.log('All screenshots successfully captured in:', OUTPUT_DIR);

  } catch (err) {
    console.error('Error taking screenshots:', err);
  } finally {
    await browser.close();
    server.close();
  }
}

main();

