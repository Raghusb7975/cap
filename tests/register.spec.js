

const { test, expect } = require('@playwright/test');
const RegisterPage = require('../POM/registerPage');

test('TC01 - Valid Registration', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.registerUser({
    name: 'Laxmi',
    email: `laxmi${Date.now()}@gmail.com`,
    password: 'Laxmi@123',
    phone: '9876543210',
    dob: '2000-01-01'
  });

  await expect(page).not.toHaveURL(/register/);
});


test('TC02 - Empty Form', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.clickCreateAccount();

  await expect(r.phoneRequired).toBeVisible();
  await expect(r.dobRequired).toBeVisible();
  await expect(page).toHaveURL(/register/);
});

test('TC03 - Empty Name', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillEmail('test@gmail.com');
  await r.fillPassword('Test@123');
  await r.clickCreateAccount();

  await expect(r.nameValidation).toBeVisible();
  await expect(page).toHaveURL(/register/);
});

test('TC04 - Successful Register redirects to Login', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.registerUser({
    name: 'raghu',
    email: `ra${Date.now()}@gmail.com`,
    password: 'raghu@12345',
    phone: '9900662219',
    dob: '2000-01-01'
  });

  await expect(page).toHaveURL(/login/);
});


test('TC05 - Existing Email shows error message', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.registerUser({
    name: 'raghu',
    email: 'ra1@gmail.com',
    password: 'Raghu@12345',
    phone: '9900886655',
    dob: '2000-01-01'
  });

  await expect(r.emailExists).toBeVisible();
  await expect(page).toHaveURL(/register/);
});


test('TC06 - Invalid Phone Number', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.registerUser({
    name: 'manu',
    email: `manu${Date.now()}@gmail.com`,
    password: 'Manu@12345',
    phone: '99',
    dob: '2000-01-01'
  });

  await expect(r.phoneRequired).toBeVisible();
  await expect(page).toHaveURL(/register/);
});


test('TC07 - Password validation', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.registerUser({
    name: 'suresh',
    email: `suresh${Date.now()}@gmail.com`,
    password: '1',
    phone: '7857462365',
    dob: '2026-03-28'
  });

  await expect(page.getByText(/Password must be at least 6/i)).toBeVisible();
});


test('TC08 - Invalid Email Format', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillEmail('ravi123');
  await r.clickCreateAccount();

  await expect(r.emailInput).toHaveAttribute('type', 'email');
});


test('TC09 - Password too short', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillPassword('123');
  await r.clickCreateAccount();

  await expect(r.passwordError).toBeVisible();
});


test('TC10 - Gender not selected', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillName('Kiran');
  await r.fillEmail(`kiran${Date.now()}@gmail.com`);
  await r.clickCreateAccount();

  await expect(page.getByText(/gender/i).first()).toBeVisible();
});


test('TC11 - DOB validation', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillDOB('2030-01-01');
  await r.clickCreateAccount();

  await expect(page.locator('text=birth').first()).toBeVisible();
});


test('TC12 - Success message', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.registerUser({
    name: 'Raghu',
    email: `raghu${Date.now()}@gmail.com`,
    password: 'Raghu@12345',
    phone: '9876543210',
    dob: '2000-01-01'
  });

  await expect(r.successMessage).toBeVisible();
});

test('TC13 - Phone validation', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillPhone('12345');
  await r.clickCreateAccount();

  await expect(page.getByText(/phone/i).first()).toBeVisible();
});

test('TC14 - Invalid Name', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillName('@#$%');
  await r.clickCreateAccount();

  await expect(page.getByText(/name/i).first()).toBeVisible();
});

test('TC15 - Navigate to Login', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.clickLoginInstead();

  await expect(page).toHaveURL(/login/);
});


