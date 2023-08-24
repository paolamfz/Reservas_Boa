import { Page, Locator } from 'playwright';

export async function navigateTo(url: string, page: Page) {
  await page.goto(url);
}

