import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../config/routes';

export class ProfilePage extends BasePage {
  constructor(page: Page) { super(page); }

  async goto() { await super.goto(ROUTES.profile); }

  async expectUser(email: string) {
    await expect(this.page.locator('#profile')).toContainText(email);
  }

  async logout() {
    await this.page.locator('#logout').click();
  }
}
