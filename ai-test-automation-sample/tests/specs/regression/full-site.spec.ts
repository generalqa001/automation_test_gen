import { test, expect } from '../../fixtures/test';

test.describe('Full site navigation @regression @p2', () => {
  const routes = [
    ['Home', '/'],
    ['Products', '/products.html'],
    ['Login', '/login.html'],
    ['Register', '/register.html'],
    ['AI', '/ai.html'],
    ['Cart', '/cart.html'],
    ['Checkout', '/checkout.html'],
    ['Orders', '/orders.html']
  ] as const;

  for (const [name, route] of routes) {
    test(`page smoke: ${name}`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveTitle(/.+/);
    });
  }
});
