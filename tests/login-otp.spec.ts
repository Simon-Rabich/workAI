import { test, expect } from '@playwright/test';
import { fetchLatestOTPCode } from '../utils/fetch-OTP';
import { LoginPage } from '../pages/LoginPage';

test('Login and verify using OTP from Gmail', async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();

  // 1. Enter your email
  await page.locator('input[name="email"]').fill('simonraviz1997@gmail.com');

  // 2. Click the "Login" button
  await page.locator('button:has-text("Login")').click();

  // 3. Wait for OTP screen to appear
  await page.waitForURL('**/login');
  await page.waitForTimeout(5000); // wait for email to arrive

  // 4. Fetch OTP from Gmail
  const otp = await fetchLatestOTPCode();
  console.log('Fetched OTP:', otp);

  // 5. Fill OTP (6-digit input fields)
  for (let i = 0; i < otp.length; i++) {
    await page.locator('input[type="text"]').nth(i).fill(otp[i]);
  }

  // 6. Submit OTP
  await page.getByRole('button', { name: 'Submit' }).click();

  // 7. Confirm login success
  await expect(page).toHaveURL(/dashboard|welcome/i);
});
