 import { test, expect } from '@playwright/test';
// import { PaymentPage } from '../POM/paymentPage';

// test.beforeEach(async ({ page }) => {
//   const payment = new PaymentPage(page);

//   await payment.goto();

//   // ✅ login
//   await payment.login('raghu01@gmail.com', 'Raghu@12345');

//   // ✅ IMPORTANT FIX: wait before checkout
//   await payment.goToCheckout();
// });


// // ✅ 1 Valid Payment
// test('TC01 - Valid card payment', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 2 Empty form
// test('TC02 - Empty payment form', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.clickPay();
// });


// // ✅ 3 Invalid card number
// test('TC03 - Invalid card number', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('1111', 'Raghu', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 4 Expired card
// test('TC04 - Expired card', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '01/20', '123');
//   await p.clickPay();
// });


// // ✅ 5 Invalid CVV
// test('TC05 - Invalid CVV', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '1');
//   await p.clickPay();
// });


// // ✅ 6 Missing name
// test('TC06 - Missing cardholder name', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', '', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 7 Special characters in name
// test('TC07 - Special characters in name', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', '@@@@', '12/28', '123');
//   await p.clickPay();
// });


// // ✅ 8 Double click pay
// test('TC08 - Double click pay', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '123');
//   await p.clickPay();
//   await p.clickPay();
// });


// // ✅ 9 Debit option
// test('TC09 - Debit card option', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectDebit();
// });


// // ✅ 10 Clinic payment
// test('TC10 - Pay at clinic', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectClinicPay();
//   await p.confirmClinicBooking();
// });


// // ✅ 11 Insurance basic
// test('TC11 - Insurance claim', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('ABC Insurance', '123456', 'MEM001', 'GRP01');
//   await p.submitInsuranceClaim();
// });


// // ✅ 12 Insurance without group
// test('TC12 - Insurance without group number', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('ABC Insurance', '123456', 'MEM001');
//   await p.submitInsuranceClaim();
// });


// // ✅ 13 Invalid policy
// test('TC13 - Short policy number', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('ABC', '123', 'MEM001');
//   await p.submitInsuranceClaim();
// });


// // ✅ 14 Missing insurance provider
// test('TC14 - Missing insurance provider', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.selectInsurance();
//   await p.fillInsurance('', '123456', 'MEM001');
//   await p.submitInsuranceClaim();
// });


// // ✅ 15 Refresh before pay
// test('TC15 - Refresh before payment', async ({ page }) => {
//   await page.reload();
// });


// // ✅ 16 Navigate back
// test('TC16 - Navigate back to cart', async ({ page }) => {
//   await page.goBack();
// });


// // ✅ 17 Multiple checkout clicks
// test('TC17 - Multiple checkout clicks', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.goToCheckout();
//   await p.goToCheckout();
// });


// // ✅ 18 Invalid expiry format
// test('TC18 - Invalid expiry format', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '1228', '123');
//   await p.clickPay();
// });


// // ✅ 19 Large CVV
// test('TC19 - CVV more than 3 digits', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '12345');
//   await p.clickPay();
// });


// // ✅ 20 Empty CVV
// test('TC20 - Empty CVV', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '12/28', '');
//   await p.clickPay();
// });


// // ✅ 21 Empty expiry
// test('TC21 - Empty expiry date', async ({ page }) => {
//   const p = new PaymentPage(page);
//   await p.fillCardDetails('4111111111111111', 'Raghu', '', '123');
//   await p.clickPay();
// });


test('payment processing test through debit card', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  // Login
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.getByRole('button', { name: 'Book Visit' }).first().click();

  // ✅ FIX 1: Dynamic date (IMPORTANT)
  await page.waitForSelector('button[aria-label]');
  await page.locator('button[aria-label]:not([disabled])').first().click();

  // Time
  await page.getByRole('combobox').click();
  await page.locator('text=/AM|PM/').first().click();

  // Consultation
  await page.getByText('Consultation Fee').click();

  // ✅ FIX 2: REQUIRED FIELD (MAIN ISSUE)
  await page.getByRole('textbox', { name: 'Briefly describe your' })
    .fill('General consultation');

  // ✅ FIX 3: Ensure button enabled
  const addBtn = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addBtn).toBeEnabled();
  await addBtn.click();

  // Checkout
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // Payment
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 1234 5678');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('04/27');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('123');

  await page.locator('button[type="submit"]').click();

  // ✅ Stable assertion
  await expect(
    page.getByRole('main').getByText(/Booking Confirmed/i)
  ).toBeVisible({ timeout: 10000 });

});

test('payment processing test through debit card1', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login', { timeout: 60000 });

  // Login
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.getByRole('button', { name: 'Book Visit' }).first().click();

  // ✅ FIX 1: Dynamic date
  await page.waitForSelector('button[aria-label]');
  await page.locator('button[aria-label]:not([disabled])').first().click();

  // Time
  await page.getByRole('combobox').click();
  await page.locator('text=/AM|PM/').first().click();

  // Consultation
  await page.getByText('Consultation Fee').click();

  // ✅ FIX 2: REQUIRED FIELD (most important)
  await page.getByRole('textbox', { name: 'Briefly describe your' })
    .fill('General consultation');

  // ✅ FIX 3: Wait until enabled
  const addBtn = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addBtn).toBeEnabled();
  await addBtn.click();

  // Checkout
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // Valid card
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 1234 5678');

  // ✅ FIX 4: Proper assertion (avoid strict mode issue)
  await expect(
    page.getByRole('main').getByText(/Card number must be exactly/i)
  ).not.toBeVisible();
});



test('test', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('heading', { name: 'Dr. Michael Chen' }).first().click();
  await page.getByText('Dr. Michael ChenNeurology$').first().click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('button', { name: 'Credit Card Visa, Mastercard' }).click();
  await page.getByRole('button', { name: 'Credit Card Visa, Mastercard' }).click();
  await page.getByRole('textbox', { name: 'Card Number *' }).click();
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1233 4556 7778 8887');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).click();
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('raghu sn');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).click();
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('08/56');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).click();
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('344');
  await page.getByRole('button', { name: 'Pay $210.00 Securely' }).click();
  await page.getByText('confirmed', { exact: true }).click();
 await expect(page.getByText('Booking Confirmed!')).toBeVisible();
});

test('test4', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('button', { name: 'Health Insurance Use your' }).click();
  await page.getByRole('textbox', { name: 'Insurance Provider *' }).click();
  await page.getByRole('textbox', { name: 'Insurance Provider *' }).fill('Blue cross');
  await page.getByRole('textbox', { name: 'Policy Number *(min. 6' }).click();
  await page.getByRole('textbox', { name: 'Policy Number *(min. 6' }).fill('123456');
  await page.getByRole('textbox', { name: 'Member ID *' }).click();
  await page.getByRole('textbox', { name: 'Member ID *' }).fill('098989');
  await page.getByRole('textbox', { name: 'Group Number (optional)' }).click();
  await page.getByRole('textbox', { name: 'Group Number (optional)' }).fill('565');
  await page.getByRole('button', { name: 'Submit Insurance Claim — $' }).click();
  await expect(page.getByText('Your appointment with Dr. Dr')).toBeVisible();
  
});



test('test5', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  await page.getByRole('button', { name: /Pay at Clinic/i }).click();

  // Ensure section is visible
  await expect(page.getByText('Pay at the Clinic')).toBeVisible();

  // Stable locator (FIX)
  await page.getByRole('button', { name: /Confirm Booking/i }).click();

  await expect(page.getByText('Booking Confirmed!')).toBeVisible();
});

test('06 testing invalid debit card details', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  // Login
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.getByRole('button', { name: 'Book Visit' }).first().click();

  // ✅ FIX 1: Dynamic date
  await page.waitForSelector('button[aria-label]');
  await page.locator('button[aria-label]:not([disabled])').first().click();

  // Time
  await page.getByRole('combobox').click();
  await page.locator('text=/AM|PM/').first().click();

  // Consultation
  await page.getByText('Consultation Fee').click();

  // ✅ FIX 2: REQUIRED FIELD (main issue)
  await page.getByRole('textbox', { name: 'Briefly describe your' })
    .fill('General consultation');

  // ✅ FIX 3: Wait for button enabled
  const addBtn = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addBtn).toBeEnabled();
  await addBtn.click();

  // Checkout
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // Invalid card
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 12');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('04/25');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('123');

  await page.locator('button[type="submit"]').click();

  // Validation
  await expect(
  page.getByRole('main').getByText(/Card number must be exactly/i)
).toBeVisible();
});


test('07 testing invalid cvv card details', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  // Login
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.getByRole('button', { name: 'Book Visit' }).first().click();

  // ✅ FIX 1: Dynamic date
  await page.waitForSelector('button[aria-label]');
  await page.locator('button[aria-label]:not([disabled])').first().click();

  // Time selection
  await page.getByRole('combobox').click();
  await page.locator('text=/AM|PM/').first().click();

  // Consultation
  await page.getByText('Consultation Fee').click();

  // ✅ FIX 2: Required description
  await page.getByRole('textbox', { name: 'Briefly describe your' })
    .fill('General consultation');

  // ✅ FIX 3: Wait for button enabled
  const addBtn = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addBtn).toBeEnabled();
  await addBtn.click();

  // Checkout
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // Invalid CVV
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 1267');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('04/25');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('13');

  await page.locator('button[type="submit"]').click();

  // Validation
  await expect(page.getByText(/CVV must be exactly 3 digits/i)).toBeVisible();
});



test('08 testing invalid card expired details', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  // Login
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.getByRole('button', { name: 'Book Visit' }).first().click();

  // ✅ FIX 1: Dynamic date (avoid hardcoded)
  await page.waitForSelector('button[aria-label]');
  await page.locator('button[aria-label]:not([disabled])').first().click();

  // Time selection
  await page.getByRole('combobox').click();
  await page.locator('text=/AM|PM/').first().click();

  // Consultation
  await page.getByText('Consultation Fee').click();

  // ✅ FIX 2: REQUIRED FIELD (MAIN ISSUE)
  await page.getByRole('textbox', { name: 'Briefly describe your' })
    .fill('General consultation');

  // ✅ FIX 3: Wait until enabled
  const addBtn = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addBtn).toBeEnabled();
  await addBtn.click();

  // Checkout
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // Invalid expired card
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 1267');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('raghu');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('04/17');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('878');

  await page.locator('button[type="submit"]').click();

  // Validation
  await expect(page.getByText(/card has expired/i)).toBeVisible();
});





test('09 testing without details', async ({ page }) => {

  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  // Login
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate to doctor booking
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.getByRole('button', { name: 'Book Visit' }).first().click();

  // ✅ FIX 1: Dynamic date selection
  await page.waitForSelector('button[aria-label]');
  await page.locator('button[aria-label]:not([disabled])').first().click();

  // Select time
  await page.getByRole('combobox').click();
  await page.locator('text=/AM|PM/').first().click();

  // ✅ FIX 2: Select consultation
  await page.getByText('Consultation Fee').click();

  // ✅ FIX 3: Fill required description (IMPORTANT)
  await page.getByRole('textbox', { name: 'Briefly describe your' })
    .fill('General consultation');

  // ✅ FIX 4: Wait for Add to Cart enabled
  const addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
  await expect(addToCartBtn).toBeEnabled();
  await addToCartBtn.click();

  // Proceed to checkout
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // Payment (invalid case - missing name)
  await page.getByRole('textbox', { name: 'Card Number *' }).fill('1234 5678 1267');
  await page.getByRole('textbox', { name: 'Cardholder Name *' }).fill('');
  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill('04/17');
  await page.getByRole('textbox', { name: 'CVV *(3 digits)' }).fill('878');

  await page.locator('button[type="submit"]').click();

  // ✅ Validation
  await expect(page.getByText(/Cardholder name is required/i)).toBeVisible();
});


test('test10', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Find Doctors' }).click();
  await page.locator('div:nth-child(7) > .px-6 > a > .inline-flex').click();

  await page.getByRole('button', { name: 'Go to the Next Month' }).click();

await page.getByRole('button', { name: /April/i }).first().click();

  await page.getByRole('combobox').click();
  await page.getByText('10:30 AM').click();
  await page.getByRole('textbox', { name: 'Briefly describe your' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('button', { name: 'Health Insurance Use your' }).click();
  await page.getByRole('textbox', { name: 'Policy Number *(min. 6' }).click();
  await page.getByRole('textbox', { name: 'Policy Number *(min. 6' }).fill('123454555');
  await page.getByRole('textbox', { name: 'Member ID *' }).click();
  await page.getByRole('textbox', { name: 'Member ID *' }).fill('323232');
  await page.getByRole('button', { name: 'Submit Insurance Claim — $' }).click();
  await expect(page.getByRole('main').getByText('Insurance provider is')).toBeVisible();

});






test('TC06 Expiry current month edge case', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Appointments Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  const currentMonth = new Date().toISOString().slice(2,7).replace('-', '/');

  await page.getByRole('textbox', { name: 'Expiry Date *' }).fill(currentMonth);
  await expect(page.locator('button[type="submit"]')).toBeEnabled();
});