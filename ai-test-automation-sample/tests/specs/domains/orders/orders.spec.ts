import { test, expect } from '../../fixtures/test';

test.describe('Orders domain @regression @p2 @orders', () => {
  test('orders page is reachable', async ({ page }) => {
    await page.goto('/orders.html');
    await expect(page.locator('h1')).toHaveText('Orders');
  });
});
