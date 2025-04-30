// import { test, expect } from '@playwright/test';

// test('Sign up flow at start.ai.work', async ({ page }) => {
//   // Go to the sign-up page
//   await page.goto('https://start.ai.work/join');

//   // Wait for the First Name input to be visible
//   await page.locator('input[name="firstName"]').waitFor({ state: 'visible', timeout: 50000 });

//   // Fill in the form fields
//   await page.locator('input[name="firstName"]').fill('John');
//   await page.locator('input[name="lastName"]').fill('Doe');
//   await page.locator('input[name="email"]').fill('john.doe@example.com');

//   // Click the Sign Up button
//   await page.locator('button[type="button"] span:has-text("Sign Up")').click();

//   // Optionally: Add assertion depending on what happens next
//   await expect(page).toHaveURL(/.*dashboard|welcome|verify/i); // adjust as needed
// });
