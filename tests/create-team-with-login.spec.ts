import { test, expect } from '@playwright/test';

// ✅ Replace with your actual OTP fetcher logic
async function getOtpFromEmail(): Promise<string> {
  // Wait for OTP email, parse it, and return the code
  await new Promise(r => setTimeout(r, 10000)); // Mock wait
  return '123456'; // Replace with actual fetch logic
}

test('Login and create a team', async ({ page }) => {
  await page.goto('https://start.ai.work/');

  // 1. Enter email
  await page.locator('input[name="email"]').fill('simonravitz@gmail.com');
  await page.locator('button span:has-text("Login")').click();

  // 2. Wait and retrieve OTP
  const otpCode = await getOtpFromEmail();

  // 3. Enter each digit (assuming OTP has 6 input boxes, one per digit)
  const digits = otpCode.split('');
  for (let i = 0; i < digits.length; i++) {
    await page.locator(`input[autocomplete="one-time-code"] >> nth=${i}`).fill(digits[i]);
  }

  // 4. Submit OTP
  await page.locator('button span:has-text("Verify")').click();

  // 5. Navigate to Create Team
  await page.locator('div.TooltipOnOverflow__trigger span:has-text("Home")').click();
  await page.locator('span:has-text("Create team")').click();

  // 6. Optional: verify you reached the team creation page
  await expect(page).toHaveURL(/.*create-team.*/);
});
