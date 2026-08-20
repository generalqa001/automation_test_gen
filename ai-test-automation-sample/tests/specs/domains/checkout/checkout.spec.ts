import { test, expect } from '../../fixtures/test';

test.describe('Checkout domain @regression @p1 @checkout', () => {
  test('checkout validates required fields @p1', async ({ page }) => {
    await page.goto('/checkout.html');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[data-testid="name"]')).toBeVisible();
  });

  test('happy path places an order @p1', async ({ page }) => {
    await page.goto('/checkout.html');
    await page.locator('[data-testid="name"]').fill('QA User');
    await page.locator('[data-testid="address"]').fill('100 Test Street');
    await page.locator('[data-testid="card"]').fill('4111111111111111');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#message')).toContainText('Order placed successfully');
  });
});
