import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }
}
