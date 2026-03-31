// import { test, expect } from '@playwright/test';
// test('TC01 - Invalid Login', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.fill('input[type="email"]', 'wrong@gmail.com');
//   await page.fill('input[type="password"]', 'wrong123');
//   await page.click('button:has-text("Sign In")');

//   await expect(page).toHaveURL(/login/);
// });

// test('TC2-Empty login validation', async ({ page }) => {

//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

// //  Click login without entering data
//   await page.locator('button[type="submit"]').click();
 
//   await expect(page).toHaveURL(/login/);

//   await expect(page.getByText(/required/i)).toBeVisible();

// });

// test('TC03 - Invalid Email', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('wrong@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await expect(page).toHaveURL(/login/);
// });


// test('TC04 - Invalid Email Format', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu123');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await expect(page).toHaveURL(/login/);
// });


// test('TC05 - Password Case Sensitive', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu1@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await expect(page).toHaveURL(/login/);
// });



// test('TC06 - Email Case Sensitivity', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('RAGHU1@GMAIL.COM');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();


//   await expect(page).toHaveURL(/login/);
// });




// test('TC7 - Spaces in Input', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill(' raghu1@gmail.com ');
//   await page.getByRole('textbox', { name: 'Password' }).fill(' Raghu@12345 ');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//  await expect(page).toHaveURL(/login/);

// });



// test('TC08-Invalid Email shows error', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('wrong@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');

//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Wait until loading disappears (important)
//   await page.waitForTimeout(2000); // or better: wait for element

//   // Check error message
//  await expect(page.locator('text=Invalid email')).toBeVisible();
// });


// test('TC09-Invalid pass shows error', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu1@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('wrong123');

//   await page.getByRole('button', { name: 'Sign In' }).click();

 
//   await expect(
//   page.getByText('HTTP 401 : Invalid email or password').first()
// ).toBeVisible();
// });

// test('TC10 - Clear Email Field', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   const email = page.getByRole('textbox', { name: 'Email address' });
//   await email.fill('raghu1@gmail.com');
//   await email.fill('');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   await expect(page.locator('text=required')).toBeVisible();
// });


// test('TC11 - Navigate to Register Page', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

//   await page.getByRole('link', { name: /sign up for free/i }).click();
  
//   await expect(page).toHaveURL(/register/);
// });



import { test } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';

test.describe('Login Tests (POM)', () => {

  test('TC01 - Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('wrong@gmail.com', 'wrong123');

    await login.expectLoginPage();
  });

  test('TC02 - Empty login validation', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.clickLogin();

    await login.expectLoginPage();
    await login.expectRequiredError();
  });

  test('TC03 - Invalid Email', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('wrong@gmail.com', 'Raghu@12345');

    await login.expectLoginPage();
  });

  test('TC04 - Invalid Email Format', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('raghu123', 'Raghu@12345');

    await login.expectLoginPage();
  });

  test('TC05 - Password Case Sensitive', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('raghu1@gmail.com', 'raghu@12345');

    await login.expectLoginPage();
  });

  test('TC06 - Email Case Sensitivity', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('RAGHU1@GMAIL.COM', 'Raghu@12345');

    await login.expectLoginPage();
  });

  test('TC07 - Spaces in Input', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(' raghu1@gmail.com ', ' Raghu@12345 ');

    await login.expectLoginPage();
  });

  test('TC08 - Invalid Email shows error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('wrong@gmail.com', 'Raghu@12345');

    await login.expectInvalidEmailError();
  });

  test('TC09 - Invalid pass shows error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('raghu1@gmail.com', 'wrong123');

    await login.expectInvalidPasswordError();
  });

  test('TC10 - Clear Email Field', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('raghu1@gmail.com', 'Raghu@12345');

    await login.clearEmail();
    await login.clickLogin();

    await login.expectRequiredError();
  });

  test('TC11 - Navigate to Register Page', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.goToRegister();

    await login.page.waitForLoadState('networkidle');
  });

});