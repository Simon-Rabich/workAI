import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly googleLoginButton = 'button:has-text("Sign in with Google")';

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLoginPage() {
    await this.page.goto('/login');
  }

  async loginWithGoogle(email: string, password: string) {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.click(this.googleLoginButton),
    ]);

    // Google login popup
    await popup.waitForLoadState('domcontentloaded');

    // Fill email
    await popup.getByLabel(/email|phone/i).fill(email);
    await popup.getByRole('button', { name: /next/i }).click();

    // Wait for password input
    await popup.waitForSelector('input[type="password"]', { timeout: 5000 });
    await popup.getByLabel(/password/i).fill(password);
    await popup.getByRole('button', { name: /next/i }).click();

    // Wait for popup to close
    while (!popup.isClosed()) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
}
