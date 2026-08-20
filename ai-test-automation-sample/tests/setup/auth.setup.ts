import { test as setup, expect } from '@playwright/test';
import { ROUTES } from '../../config/routes';
import { users } from '../../data/users';

const authFile = 'storageState/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto(ROUTES.login);
  await page.locator('[data-testid="email"]').fill(users.valid.email);
  await page.locator('[data-testid="password"]').fill(users.valid.password);
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/profile\.html/);
  await page.context().storageState({ path: authFile });
});
