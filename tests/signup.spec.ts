import { test } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';

test('User can sign up via /join', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.signUp('John', 'Doe', 'john.doe@example.com');
});

//this test works