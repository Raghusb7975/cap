
import { test, expect } from '@playwright/test';

test('test01', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByText('Email addressPasswordForgot password?Sign In').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'R raghu Patient' }).click();
  
await expect(page.getByRole('heading', { name: 'Account Settings' })).toBeVisible();
});




test('test02', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01');
  await page.getByRole('textbox', { name: 'Email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();


await expect(page.locator('.error-message')).not.toBeVisible();
});




test('test3', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('98988');
  await page.getByRole('button', { name: 'Save Changes' }).click();

const errorMessage = await page.getByText('Phone number is required');
  await expect(errorMessage).toBeVisible();

});






test('test4', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  // Log in
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Navigate to the dashboard
  await page.getByRole('button', { name: 'Dashboard' });

  // Click the 'Profile' button and verify URL navigation
  await page.getByRole('button', { name: 'Profile' }).click();
  await expect(page).toHaveURL('https://medi-schedule--raghubakare143.replit.app/profile');
});





test('test5', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  // Log in
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Navigate to profile and edit Full Name
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('');
  
  // Try to save changes with an empty Full Name
  await page.getByRole('button', { name: 'Save Changes' }).click();
  
  // Check if the error message appears for the empty Full Name field
  const errorMessage = await page.getByText('Name must be at least 2 characters');
  await expect(errorMessage).toBeVisible();
});



test('test6', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('');
  await page.getByRole('button', { name: 'Save Changes' }).click();

const errorMessage = await page.getByText('Phone number is required');
  await expect(errorMessage).toBeVisible();

});



test('test7', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  // Log in
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  // Navigate to Profile page
  await page.getByRole('button', { name: 'Profile' }).click();
  
  // Select 'Male' from the combobox
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  
  // Check if 'Male' is selected
  const selectedOption = await page.getByRole('combobox').innerText();
  expect(selectedOption).toContain('Male'); // Ensure 'Male' is selected
  
  // Select 'Female' from the combobox
  await page.getByRole('combobox').click();
  await page.getByLabel('Female').getByText('Female').click();
  
  // Check if 'Female' is selected
  const femaleSelected = await page.getByRole('combobox').innerText();
  expect(femaleSelected).toContain('Female'); // Ensure 'Female' is selected
  
  // Click Save Changes button
  await page.getByRole('button', { name: 'Save Changes' }).click();
});






test('test8', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect( page.getByText('Manage your personal')).toBeVisible();
});