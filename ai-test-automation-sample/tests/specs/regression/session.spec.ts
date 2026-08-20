import { test, expect } from '../../fixtures/test';
import { users } from '../../data/users';

test.describe('Session implementation @regression @p1 @auth', () => {
  test('login session persists across navigation', async ({ page }) => {
    await page.goto('/login.html');
    await page.locator('[data-testid="email"]').fill(users.valid.email);
    await page.locator('[data-testid="password"]').fill(users.valid.password);
    await page.locator('button[type="submit"]').click();
    await page.goto('/products.html');
    await page.goto('/profile.html');
    await expect(page.locator('#profile')).toContainText(users.valid.email);
  });

  test('logout removes session', async ({ page }) => {
    await page.goto('/login.html');
    await page.locator('[data-testid="email"]').fill(users.valid.email);
    await page.locator('[data-testid="password"]').fill(users.valid.password);
    await page.locator('button[type="submit"]').click();
    await page.locator('#logout').click();
    await page.goto('/profile.html');
    await expect(page).toHaveURL(/login\.html/);
  });
});
