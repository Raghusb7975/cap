// const { test, expect } = require('@playwright/test');


// //1. Valid Registration
// test('TC01 - Valid Registration', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('Laxmi');
//   await page.getByRole('textbox', { name: 'Email address' }).fill(`laxmi${Date.now()}@gmail.com`);
//   await page.getByRole('textbox', { name: 'Password' }).fill('Laxmi@123');
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('9876543210');
//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

//  await page.getByRole('combobox').click();
//  await page.getByRole('option', { name: 'Male', exact: true }).click();

//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await expect(page).not.toHaveURL(/register/);
// });



// test('TC02 - Empty Form', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('button', { name: 'Create Account' }).click();


//   await expect(page.getByText('Phone number is required')).toBeVisible();
//   await expect(page.getByText('Date of birth is required')).toBeVisible();


//   await expect(page).toHaveURL(/register/);
// });




// test('TC03 - Empty Name', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Email address' }).fill('test@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');

//   await page.getByRole('button', { name: 'Create Account' }).click();


//   await expect(
//     page.getByText('Name must be at least 2 characters')
//   ).toBeVisible();


//   await expect(page).toHaveURL(/register/);
// });




// test('TC04 - Successful Register redirects to Login', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('raghu');
//   await page.getByRole('textbox', { name: 'Email address' }).fill(`ra${Date.now()}@gmail.com`);
//   await page.getByRole('textbox', { name: 'Password' }).fill('raghu@12345');
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('9900662219');
//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'Male', exact: true }).click();

//   await page.getByRole('button', { name: 'Create Account' }).click();

  
//   await expect(page).toHaveURL(/login/);
// });





// test('TC5 - Existing Email shows error message', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('raghu');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('ra1@gmail.com'); // already exists
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('9900886655');
//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'Male', exact: true }).click();

//   await page.getByRole('button', { name: 'Create Account' }).click();

  
//   await expect(
//     page.getByText(/already|exists|email/i).first()
//   ).toBeVisible();


//   await expect(page).toHaveURL(/register/);
// });






// test('TC6 - Invalid Phone Number shows validation message', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('manu');
//   await page.getByRole('textbox', { name: 'Email address' }).fill(`manu${Date.now()}@gmail.com`);
//   await page.getByRole('textbox', { name: 'Password' }).fill('Manu@12345');


//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('99');

//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'Male', exact: true }).first().click();

//   await page.getByRole('button', { name: 'Create Account' }).click();


//   await expect(
//     page.getByText(/Phone number is required/i)
//   ).toBeVisible();


//   await expect(page).toHaveURL(/register/);
// });


// test('test7-  Invalid Phone Number shows validation message', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');
//   await page.getByText('MedBookCreate your').click();
//   await page.getByRole('textbox', { name: 'Full Name' }).click();
//   await page.getByRole('textbox', { name: 'Full Name' }).fill('suresh');
//   await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('suresh12@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('1');
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('7857462365');
//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2026-03-28');
//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'Male', exact: true }).click();
//   await page.getByRole('button', { name: 'Create Account' }).click();

// await expect(
//     page.getByText(/Password must be at least 6/i)
//   ).toBeVisible();
   
// });


// test('TC08 - Invalid Email Format', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//  await page.getByRole('textbox', { name: 'Email address' }).fill('ravi123');

// await page.getByRole('button', { name: 'Create Account' }).click();

// const emailInput = page.getByRole('textbox', { name: 'Email address' });

// await expect(emailInput).toHaveAttribute('type', 'email');
// });


// test('TC09 - Password too short', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Password' }).fill('123');

//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await expect(page.getByText(/at least/i).first()).toBeVisible();
// });


// test('TC10 - Gender not selected', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('Kiran');
//   await page.getByRole('textbox', { name: 'Email address' }).fill(`kiran${Date.now()}@gmail.com`);

//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await expect(page.getByText(/gender/i).first()).toBeVisible();
// });



// test('TC11 - DOB validation check', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2030-01-01');

//   await page.getByRole('button', { name: 'Create Account' }).click();


//   await expect(
//     page.locator('text=birth').first()
//   ).toBeVisible();
// });



// test('TC - Successful registration shows success message', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('Raghu');
//   await page.getByRole('textbox', { name: 'Email address' }).fill(`raghu${Date.now()}@gmail.com`);
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('9876543210');
//   await page.getByRole('textbox', { name: 'Date of Birth' }).fill('2000-01-01');

//   await page.getByRole('combobox').click();
//   await page.getByRole('option', { name: 'Male', exact: true }).first().click();

//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await expect(
//     page.getByText(/success|account created|registered/i).first()
//   ).toBeVisible();
// });



// test('TC12 - Phone less than 10 digits', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('12345');

//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await expect(page.getByText(/phone/i).first()).toBeVisible();
// });


// test('TC13 - Invalid characters in name', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');

//   await page.getByRole('textbox', { name: 'Full Name' }).fill('@#$%');

//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await expect(page.getByText(/name/i).first()).toBeVisible();
// });



// test('TC14 - Click "Log in instead" navigates to login', async ({ page }) => {
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/register');
//   await page.getByRole('link', { name: 'Log in instead' }).click();
//   await expect(page).toHaveURL(/login/);
// });








const { test, expect } = require('@playwright/test');
const RegisterPage = require('../POM/registerPage');

// TC01 - Valid Registration
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

// TC02 - Empty Form
test('TC02 - Empty Form', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.clickCreateAccount();

  await expect(r.phoneRequired).toBeVisible();
  await expect(r.dobRequired).toBeVisible();
  await expect(page).toHaveURL(/register/);
});

// TC03 - Empty Name
test('TC03 - Empty Name', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillEmail('test@gmail.com');
  await r.fillPassword('Test@123');
  await r.clickCreateAccount();

  await expect(r.nameValidation).toBeVisible();
  await expect(page).toHaveURL(/register/);
});

// TC04 - Successful Register redirects to Login
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

// TC05 - Existing Email
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

// TC06 - Invalid Phone
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

// TC07 - Password too short
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

// TC08 - Invalid Email Format
test('TC08 - Invalid Email Format', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillEmail('ravi123');
  await r.clickCreateAccount();

  await expect(r.emailInput).toHaveAttribute('type', 'email');
});

// TC09 - Password too short
test('TC09 - Password too short', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillPassword('123');
  await r.clickCreateAccount();

  await expect(r.passwordError).toBeVisible();
});

// TC10 - Gender not selected
test('TC10 - Gender not selected', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillName('Kiran');
  await r.fillEmail(`kiran${Date.now()}@gmail.com`);
  await r.clickCreateAccount();

  await expect(page.getByText(/gender/i).first()).toBeVisible();
});

// TC11 - DOB validation
test('TC11 - DOB validation', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillDOB('2030-01-01');
  await r.clickCreateAccount();

  await expect(page.locator('text=birth').first()).toBeVisible();
});

// TC12 - Success message
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

// TC13 - Phone less than 10 digits
test('TC13 - Phone validation', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillPhone('12345');
  await r.clickCreateAccount();

  await expect(page.getByText(/phone/i).first()).toBeVisible();
});

// TC14 - Invalid characters in name
test('TC14 - Invalid Name', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.fillName('@#$%');
  await r.clickCreateAccount();

  await expect(page.getByText(/name/i).first()).toBeVisible();
});

// TC15 - Navigate to login
test('TC15 - Navigate to Login', async ({ page }) => {
  const r = new RegisterPage(page);
  await r.goto();

  await r.clickLoginInstead();

  await expect(page).toHaveURL(/login/);
});





// {
//   "name": "hospital-playwright-testing",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {},
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "type": "commonjs",
//   "devDependencies": {
//     "@playwright/test": "^1.58.2",
//     "@types/node": "^25.5.0",
//     "allure": "^3.3.1",
//     "allure-playwright": "^3.6.0"
//   }
// }
