import { expect, Page } from '@playwright/test';

export async function waitForUrl(page: Page, url: string) {
  await expect(page).toHaveURL(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
}

export async function waitForText(page: Page, selector: string, text: string) {
  await expect(page.locator(selector)).toContainText(text);
}
