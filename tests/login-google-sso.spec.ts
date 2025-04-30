import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login via Google SSO', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  
  await page.locator('button:has-text("Sign in with Google")').click();

  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('button:has-text("Sign in with Google")').click(),
  ]);

  const emailDropdown = await popup.locator('div[role="listbox"]');
  const firstEmail = await emailDropdown.locator('div[role="option"]:nth-child(1)');
  // await firstEmail.click();
  // await popup.waitForTimeout(5000);
});
