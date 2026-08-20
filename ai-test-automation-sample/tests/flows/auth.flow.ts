import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import { RegisterPage } from '../pages/RegisterPage';

export async function loginFlow(page: Page, email: string, password: string) {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(email, password);
}

export async function logoutFlow(page: Page) {
  const profile = new ProfilePage(page);
  await profile.logout();
}

export async function registerFlow(page: Page, name: string, email: string, password: string) {
  const register = new RegisterPage(page);
  await register.goto();
  await register.register(name, email, password);
}
