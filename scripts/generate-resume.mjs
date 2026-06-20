import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generatePDF() {
  const htmlPath = resolve(__dirname, 'resume-template.html');
  const outputPath = resolve(__dirname, '../public/resume/Ujjwal_Varsney_SeniorUXDesigner.pdf');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const html = readFileSync(htmlPath, 'utf-8');
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log('PDF generated:', outputPath);
  await browser.close();
}

generatePDF().catch(console.error);
