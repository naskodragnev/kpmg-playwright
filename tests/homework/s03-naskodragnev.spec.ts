import { test, expect } from '@playwright/test';

test('open site', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/City Services/);

  // Click on the chosen user
  await page.getByTestId('cs-prefill-citizen').click();
  // Click on the submit button
  await page.getByTestId('cs-login-submit').click();
  // Wait to verify we are logged in the dashboard
  await expect(page).toHaveURL('http://localhost:5173/dashboard');

});