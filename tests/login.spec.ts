import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { sleep } from '../utils/sleep';

test('Login via Login  with Exisitng email', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await page.locator('input[name="email"]').fill('simonravitz@gmail.com');
  await page.locator('button[type="button"] span:has-text("Login")').click();
  await sleep(5000);
});