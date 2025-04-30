// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';

// test('Login via Google SSO', async ({ page }) => {
//   // Go to the login page
//   const login = new LoginPage(page);
//   await login.gotoLoginPage();
  
//   // Click the "Sign in with Google" button
//   await page.locator('button:has-text("Sign in with Google")').click();

//   // Wait for the Google login popup to appear and switch to the popup window
//   const [popup] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('button:has-text("Sign in with Google")').click(),
//   ]);

//   // Wait for the email dropdown to appear and click the first option
//   const emailDropdown = await popup.locator('div[role="listbox"]'); // Replace with the correct selector for the email dropdown
//   const firstEmail = await emailDropdown.locator('div[role="option"]:nth-child(1)');
//   await firstEmail.click();

//   // Optionally, you can add a wait here to ensure the user is logged in, based on post-login UI
//   await popup.waitForTimeout(5000); // Wait for the page to finish loading (adjust as needed)

//   // Verify the successful login, you can adjust this based on what happens after login
//   await expect(popup).toHaveURL(/.*dashboard.*/); // Adjust the URL after login (e.g., dashboard)
// });
