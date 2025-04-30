# Test info

- Name: Sign up flow negative validation
- Location: /Users/simonravitz/aiwork/workAI/tests/signup-negative.spec.ts:4:5

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="firstName"]')

    at /Users/simonravitz/aiwork/workAI/tests/signup-negative.spec.ts:9:49
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
   4 | test('Sign up flow negative validation', async ({ page }) => {
   5 |   const login = new LoginPage(page);
   6 |   await login.gotoLoginPage();
   7 |
   8 |   // Enter invalid data (single letters for name and invalid email)
>  9 |   await page.locator('input[name="firstName"]').fill('J');
     |                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  10 |   await page.locator('input[name="lastName"]').fill('D');
  11 |   await page.locator('input[name="email"]').fill('invalidemail');
  12 |
  13 |   // Click the Sign Up button
  14 |   await page.locator('button[type="button"] span:has-text("Sign Up")').click();
  15 |
  16 |   // Verify error messages
  17 |   await expect(page.locator('.FormField__error').nth(0)).toHaveText('Min length is 2');
  18 |   await expect(page.locator('.FormField__error').nth(1)).toHaveText('Min length is 2');
  19 |   await expect(page.locator('.FormField__error').nth(2)).toHaveText('Invalid email');
  20 | });
  21 |
```