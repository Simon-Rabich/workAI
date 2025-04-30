// import { test, expect } from '@playwright/test';

// test('Create A Team', async ({ page }) => {
//   // Step 1: Go to the main page
//   await page.goto('https://start.ai.work/');

//   // Step 2: Click on the "Home" button (located inside a div with class TooltipOnOverflow__trigger)
//   await page.locator('div.TooltipOnOverflow__trigger span:has-text("Home")').click();

//   // Step 3: Click on the "Create team" button (using the span text selector)
//   await page.locator('span:has-text("Create team")').click();

//   // Step 4: Add a verification step (depending on what happens after clicking "Create team")
//   // For example, verify if a modal or a new page for creating a team appears
//   await expect(page).toHaveURL(/.*create-team/);  // Adjust the URL as needed after navigating
//   // Optionally, you can add other assertions, like checking for specific elements in the page
//   // await expect(page.locator('h1')).toHaveText('Create Your Team');  // Example of a text check
// });
