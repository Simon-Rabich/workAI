// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';

// test('Sign up flow negative validation', async ({ page }) => {
//   const login = new LoginPage(page);
//   await login.gotoLoginPage();

//   // Enter invalid data (single letters for name and invalid email)
//   await page.locator('input[name="firstName"]').fill('J');
//   await page.locator('input[name="lastName"]').fill('D');
//   await page.locator('input[name="email"]').fill('invalidemail');

//   // Click the Sign Up button
//   await page.locator('button[type="button"] span:has-text("Sign Up")').click();

//   // Verify error messages
//   await expect(page.locator('.FormField__error').nth(0)).toHaveText('Min length is 2');
//   await expect(page.locator('.FormField__error').nth(1)).toHaveText('Min length is 2');
//   await expect(page.locator('.FormField__error').nth(2)).toHaveText('Invalid email');
// });

//this test works