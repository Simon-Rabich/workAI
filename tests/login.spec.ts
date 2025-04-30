import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login via Google SSO', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();

  // Replace with test credentials
  await login.loginWithGoogle('your_test_email@gmail.com', 'your_password');

  // Assertion placeholder: adjust based on post-login UI
  await expect(page).toHaveURL(/.*dashboard.*/);
});
