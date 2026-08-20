import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../config/routes';
import { SELECTORS } from '../config/selectors';

export class LoginPage extends BasePage {
  constructor(page: Page) { super(page); }

  async goto() { await super.goto(ROUTES.login); }

  async login(email: string, password: string) {
    await this.fill(SELECTORS.login.email, email);
    await this.fill(SELECTORS.login.password, password);
    await this.click(SELECTORS.login.submit);
  }

  async expectError(text: string) {
    await expect(this.page.locator(SELECTORS.login.message)).toContainText(text);
  }
}
