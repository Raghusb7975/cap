import { expect, test } from '@playwright/test';
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


test('test12', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  await expect( page.getByText('Please enter a valid email')).toBeVisible();
});




test('login with wrong credentials', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu0@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu0@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(
    page.getByText('HTTP 401 : Invalid email or password', { exact: true })
  ).toBeVisible();

  await expect(page).toHaveURL(/login/);
});


test('test', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByText('Enter your credentials to').click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
 await expect(page.getByText('Enter your credentials to')).toBeVisible();
});