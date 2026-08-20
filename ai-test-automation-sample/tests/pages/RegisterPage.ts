import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../config/routes';
import { SELECTORS } from '../config/selectors';

export class RegisterPage extends BasePage {
  constructor(page: Page) { super(page); }

  async goto() { await super.goto(ROUTES.register); }

  async register(name: string, email: string, password: string) {
    await this.fill(SELECTORS.register.name, name);
    await this.fill(SELECTORS.register.email, email);
    await this.fill(SELECTORS.register.password, password);
    await this.click(SELECTORS.register.submit);
  }

  async expectSuccess(text = 'Registration successful') {
    await expect(this.page.locator(SELECTORS.register.message)).toContainText(text);
  }
}
