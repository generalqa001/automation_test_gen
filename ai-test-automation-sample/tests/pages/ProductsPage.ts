import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../config/routes';
import { SELECTORS } from '../config/selectors';

export class ProductsPage extends BasePage {
  constructor(page: Page) { super(page); }

  async goto() { await super.goto(ROUTES.products); }

  async search(term: string) {
    await this.fill(SELECTORS.products.search, term);
  }

  async filterCategory(category: string) {
    await this.page.locator(SELECTORS.products.category).selectOption(category);
  }

  async expectProductVisible(name: string) {
    await expect(this.page.locator('.card').filter({ hasText: name })).toBeVisible();
  }

  async expectProductCount(count: number) {
    await expect(this.page.locator(SELECTORS.products.card)).toHaveCount(count);
  }

  async openProduct(name: string) {
    await this.page.locator('.card').filter({ hasText: name }).getByText('Details').click();
  }
}
