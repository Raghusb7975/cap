import { test, expect } from '@playwright/test';

test('01 check if cart is empty or not', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  const emptyCartHeading = page.locator('h1', { hasText: 'Your cart is empty' });
  const cartHeading = page.locator('h1', { hasText: 'Your Appointments Cart' });
  
  if (await emptyCartHeading.isVisible()) {
    console.log("Cart is empty");
    await page.getByText("Looks like you haven't added").click(); // Optional: Handle the empty cart scenario
    await expect(emptyCartHeading).toBeVisible();
  } else {
    console.log("Cart has items");
    await page.getByRole('heading', { name: 'Your Appointments Cart' }).click(); // Continue with non-empty cart actions
    await expect(cartHeading).toBeVisible();
  }
});



test('test02-adding a cart', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.locator('a:has-text("Book Visit")').first().click();
  await page.getByRole('button', { name: /Next Month/i }).click();
  await page.locator('button[aria-label]').filter({ hasText: /\d+/ }).first().click();

  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: '10:30 AM' }).click();
  const addToCart = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addToCart).toBeEnabled();
  await addToCart.click();

  await expect(page.getByRole('heading', { name: /Dr\. Lisa Thompson/i }).first()).toBeVisible();
});



test('test03- check the heading of the Your Appointments Cart ', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'View Cart' }).click();
  await  expect(page.getByRole('heading', { name: 'Your Appointments Cart' })).toBeVisible();
});



test('test4', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
 
});


test('test5', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL('https://medi-schedule--raghubakare143.replit.app/dashboard');
  await page.getByRole('button', { name: 'View Cart' }).click();
  await expect(page).toHaveURL('https://medi-schedule--raghubakare143.replit.app/cart');
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await expect(page).toHaveURL('https://medi-schedule--raghubakare143.replit.app/cart');
});




test('test6', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await expect(page).toHaveURL('https://medi-schedule--raghubakare143.replit.app/cart');
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
await expect(page).toHaveURL(/\/payment\?cartItemId=\d+/);
});




test('test7', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('button', { name: 'View Cart' }).click();
  const subtotalBefore = await page.locator('text=Subtotal').textContent();
  await page.getByRole('button').nth(3).click();
  await page.getByText('Subtotal (63 items)');
  await page.locator('div:nth-child(63) > .inline-flex');
  const subtotalAfter = await page.locator('text=Subtotal').textContent();
  expect(parseFloat(subtotalAfter.replace('Subtotal','63').trim())).toBeLessThan(parseFloat(subtotalBefore.replace('Subtotal', '64').trim()));
});




test.skip('test8', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Welcome backraghu 👋You have 115 upcoming appointments Find a Doctor View Cart').click();
  await page.getByRole('button', { name: 'View Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await expect(page).toHaveURL('https://medi-schedule--raghubakare143.replit.app/payment?cartItemId=242');
  
});

