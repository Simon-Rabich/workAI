# Test info

- Name: Login via Google SSO
- Location: /Users/simonravitz/aiwork/workAI/tests/login-google-sso.spec.ts:4:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div[role="listbox"]').locator('div[role="option"]:nth-child(1)')

    at /Users/simonravitz/aiwork/workAI/tests/login-google-sso.spec.ts:21:20
```

# Page snapshot

```yaml
- link:
  - /url: /
  - img
- text: Continue journey Create tickets with ease Sign up Log In Email
- textbox
- button "Login"
- button "Sign in with Google":
  - img
  - text: Sign in with Google
- text: "@2025 ai.work"
- link "Privacy Policy":
  - /url: https://www.ai.work/privacy-policy
- link "Terms and Conditions":
  - /url: https://www.ai.work/terms-of-use
- text: Technical Info
- img
- img
- img
- text: "Current Page: https://start.ai.work/login"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { LoginPage } from '../pages/LoginPage';
   3 |
   4 | test('Login via Google SSO', async ({ page }) => {
   5 |   // Go to the login page
   6 |   const login = new LoginPage(page);
   7 |   await login.gotoLoginPage();
   8 |   
   9 |   // Click the "Sign in with Google" button
  10 |   await page.locator('button:has-text("Sign in with Google")').click();
  11 |
  12 |   // Wait for the Google login popup to appear and switch to the popup window
  13 |   const [popup] = await Promise.all([
  14 |     page.waitForEvent('popup'),
  15 |     page.locator('button:has-text("Sign in with Google")').click(),
  16 |   ]);
  17 |
  18 |   // Wait for the email dropdown to appear and click the first option
  19 |   const emailDropdown = await popup.locator('div[role="listbox"]'); // Replace with the correct selector for the email dropdown
  20 |   const firstEmail = await emailDropdown.locator('div[role="option"]:nth-child(1)');
> 21 |   await firstEmail.click();
     |                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |
  23 |   // Optionally, you can add a wait here to ensure the user is logged in, based on post-login UI
  24 |   await popup.waitForTimeout(5000); // Wait for the page to finish loading (adjust as needed)
  25 |
  26 |   // Verify the successful login, you can adjust this based on what happens after login
  27 |   await expect(popup).toHaveURL(/.*dashboard.*/); // Adjust the URL after login (e.g., dashboard)
  28 | });
  29 |
```