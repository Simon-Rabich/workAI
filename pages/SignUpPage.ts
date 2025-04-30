import { Page, expect } from '@playwright/test';
import { sleep } from '../utils/sleep';

export class SignUpPage {
  readonly page: Page;
  readonly url = '/join';
  readonly firstNameInput = 'input[name="firstName"]';
  readonly lastNameInput = 'input[name="lastName"]';
  readonly emailInput = 'input[name="email"]';
  readonly signUpButton = 'button[type="button"] span:has-text("Sign Up")';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async fillForm(firstName: string, lastName: string, email: string) {
    await this.page.locator(this.firstNameInput).waitFor({ state: 'visible', timeout: 50000 });
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.emailInput).fill(email);
  }

  async submitForm() {
    await this.page.locator(this.signUpButton).click();
  }

  async expectSuccessfulRedirect() {
    await sleep(10000);
    await expect(this.page).toHaveURL(/.*join/i);
  }

  async signUp(firstName: string, lastName: string, email: string) {
    await this.goto();
    await this.fillForm(firstName, lastName, email);
    await this.submitForm();
    await this.expectSuccessfulRedirect();
  }
}
