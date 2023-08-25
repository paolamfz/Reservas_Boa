import { Page } from 'playwright';

export async function navigateTo(url: string, page: Page) {
  await page.goto(url);
}

export async function fill(selector: string, value: string, page: Page) {
  await page.fill(selector, value);
}

