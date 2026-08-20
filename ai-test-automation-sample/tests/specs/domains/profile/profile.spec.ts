import { test, expect } from '../../fixtures/test';

test.describe('Profile domain @regression @p1 @profile', () => {
  test('unauthenticated user is redirected from profile', async ({ page }) => {
    await page.goto('/profile.html');
    await expect(page).toHaveURL(/login\.html/);
  });
});
