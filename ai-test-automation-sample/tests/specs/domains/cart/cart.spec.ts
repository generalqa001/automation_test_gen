import { test, expect } from '../../fixtures/test';

test.describe('Cart domain @regression @p1 @cart', () => {
  test('user can add a product and see it in cart', async ({ productsPage, page }) => {
    await productsPage.goto();
    await page.locator('[data-add="1"]').click();
    await page.goto('/cart.html');
    await expect(page.locator('#cart')).toContainText('AI Laptop');
  });
});
