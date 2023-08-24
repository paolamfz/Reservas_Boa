import { chromium, Browser, Page } from 'playwright';
import dotenv from 'dotenv';
import { SITE_URL, selectors } from '../config/siteConfig';
import { navigateTo} from '../utils/helpers';
dotenv.config();

async function automateFlightReservation() {
  const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

    await navigateTo(SITE_URL, page);
    await page.waitForSelector('#reserva_vuelos', { state: 'visible' });
    await page.locator('#select_desde.origen-destino').selectOption('COCHABAMBA');
    await page.locator('#select_hasta.origen-destino').selectOption('LA PAZ');
    await page.locator('#rbtn_ida').click();
    await page.getByRole('textbox', {name : ''}).fill('26 Agosto 2023');
    await page.pause();
    //await page.locator('html/body/div[3]/div[2]/div[1]/table[2]/tbody/tr[3]/td[1]/div/input').fill('24 Agosto 2023')
    await page.locator('#btn_buscar_vuelos').click();
    await page.waitForTimeout(10000);

    await browser.close();
  }

automateFlightReservation();
