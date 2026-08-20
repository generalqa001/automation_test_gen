import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../config/routes';

export class AiPage extends BasePage {
  constructor(page: Page) { super(page); }

  async goto() { await super.goto(ROUTES.ai); }

  async ask(prompt: string) {
    await this.page.locator('#prompt').fill(prompt);
    await this.page.locator('#send').click();
  }

  async expectResponse(text: string) {
    await expect(this.page.locator('#response')).toContainText(text);
  }
}
