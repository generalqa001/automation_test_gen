import { test } from '../../fixtures/test';
import { registrationData } from '../../data/users';

test.describe('Registration domain @regression @p1 @auth', () => {
  for (const data of registrationData) {
    test(`registers a new user: ${data.name}`, async ({ page }) => {
      await page.goto('/register.html');
      await page.locator('[data-testid="name"]').fill(data.name);
      await page.locator('[data-testid="email"]').fill(data.email);
      await page.locator('[data-testid="password"]').fill(data.password);
      await page.locator('button[type="submit"]').click();
      await page.locator('#message').waitFor();
      await test.expect(page.locator('#message')).toContainText('Registration successful');
    });
  }

  test('duplicate email is rejected @p1', async ({ page }) => {
    await page.goto('/register.html');
    await page.locator('[data-testid="name"]').fill('Duplicate');
    await page.locator('[data-testid="email"]').fill('qa@example.com');
    await page.locator('[data-testid="password"]').fill('Password123!');
    await page.locator('button[type="submit"]').click();
    await test.expect(page.locator('#message')).toContainText('Email already registered');
  });
});
