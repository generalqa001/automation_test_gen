import { test, expect } from '../../fixtures/test';
import { users } from '../../data/users';
import { loginFlow, logoutFlow } from '../../flows/auth.flow';
import { ProfilePage } from '../../pages/ProfilePage';

test.describe('Authentication Smoke @smoke @p0 @auth', () => {
  test('valid user can login and logout', async ({ page }) => {
    await loginFlow(page, users.valid.email, users.valid.password);
    const profile = new ProfilePage(page);
    await profile.expectUser(users.valid.email);
    await logoutFlow(page);
    await expect(page).toHaveURL(/\/$/);
  });
});
