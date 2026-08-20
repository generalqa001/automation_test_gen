import { test } from '../../fixtures/test';
import { users } from '../../data/users';

test.describe('Login domain @regression @p1 @auth', () => {
  test('invalid credentials show error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.invalid.email, users.invalid.password);
    await loginPage.expectError('Invalid credentials');
  });

  for (const user of [users.valid, users.admin]) {
    test(`data-driven login for ${user.email} @p1`, async ({ page }) => {
      await loginPage.goto();
      await loginPage.login(user.email, user.password);
      await page.waitForURL(/profile\.html/);
    });
  }
});
