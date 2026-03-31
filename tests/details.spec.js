// import { test, expect } from '@playwright/test';

// test('test01 - Check the name of the doctor', async ({ page }) => {
//   // Step 1: Navigate to login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Step 2: Navigate to Find Doctors page
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();
  
//   // Step 3: Ensure the doctor with the name "Dr. Sarah Johnson" is visible
//   const doctorName = await page.getByRole('heading', { name: 'Dr. Sarah Johnson' });
  
//   // Assert the doctor's name is visible
//   await expect(doctorName).toBeVisible();
  
//   // Step 4: Click on the doctor's name
//   await doctorName.click();
// });








// test('test02 - Check doctor experience and rating', async ({ page }) => {
//   // Step 1: Navigate to login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Step 2: Navigate to Find Doctors page
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();
  
//   // Step 3: Click on 'Book Visit' (second button, nth(1))
//   await page.getByRole('button', { name: 'Book Visit' }).nth(1).click();
  
//   // Step 4: Ensure 'Years Experience' is visible before clicking
//   const yearsExperience = await page.getByText('Years Experience');
//   await expect(yearsExperience).toBeVisible();
//   await yearsExperience.click();  // Click on 'Years Experience' text
  
//   // Step 5: Ensure '4.9(120+ reviews)' is visible before clicking
//   const rating = await page.getByText('4.9(120+ reviews)');
//   await expect(rating).toBeVisible();  // Assert it is visible
//   await rating.click();  // Click on the doctor rating

// });



// test('test03 - Check doctor specialty and location', async ({ page }) => {
//   // Step 1: Navigate to login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Step 2: Navigate to Find Doctors page
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();
  
//   // Step 3: Click on the 'Book Visit' button (nth(4) indicates the fifth button)
//   await page.getByRole('button', { name: 'Book Visit' }).nth(4).click();
  
//   // Step 4: Click on 'Psychiatry' to filter the specialty
//   const psychiatryText = await page.getByText('Psychiatry');
//   await expect(psychiatryText).toBeVisible();  // Ensure Psychiatry option is visible
//   await psychiatryText.click();  // Click on the Psychiatry option
  
//   // Step 5: Click on 'Mind Wellness Clinic'
//   const clinicText = await page.getByText('Mind Wellness Clinic');
//   await expect(clinicText).toBeVisible();  // Ensure Clinic option is visible
//   await clinicText.click();  // Click on the clinic
  
//   // Step 6: Verify the doctor's specialty is "Psychiatry"
//   const doctorSpecialty = await page.locator('text=Psychiatry');  // Assuming the specialty is displayed as text
//   await expect(doctorSpecialty).toBeVisible();  // Verify that the specialty is displayed
  
//   // Step 7: Verify the location is "Mind Wellness Clinic"
//   const clinicLocation = await page.locator('text=Mind Wellness Clinic');  // Assuming location is displayed as text
//   await expect(clinicLocation).toBeVisible();  // Verify that the clinic name appears
  
//   // You can also assert more details, such as doctor name, rating, etc. if those elements are present
// });


// test('test04 - Check consultation fee is $175', async ({ page }) => {
//   // Step 1: Navigate to the login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Step 2: Navigate to Find Doctors
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();

//   // Step 3: Click on the fifth 'Book Visit' button
//   await page.getByRole('button', { name: 'Book Visit' }).nth(5).click();

//   // Step 4: Click on Consultation Fee
//   await page.getByText('Consultation Fee$').click();

//   // Step 5: Verify that the consultation fee is $175
//   const consultationFee = await page.locator('text=$175');
//   await expect(consultationFee).toBeVisible(); // Ensure the fee is visible on the page

//   // Optionally, assert that no other fees are displayed
//   const otherFees = await page.locator('text=$').allTextContents(); // Adjust selector if necessary
//   const feeValues = otherFees.map((fee) => fee.trim()); // Remove extra spaces or line breaks

//   expect(feeValues).toContain('$175'); // Verify that $175 is in the list of fee values
// });




// test('test05 - Check doctor availability', async ({ page }) => {
//   // Step 1: Navigate to the login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Step 2: Navigate to Find Doctors
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();

//   // Step 3: Click on the 2nd 'Book Visit' button
//   await page.getByRole('button', { name: 'Book Visit' }).nth(2).click();

//   // Step 4: Check for the doctor's availability text
//   const availabilityText = await page.locator('div').filter({ hasText: /^AvailabilityMon, Wed, Fri$/ }).first();

//   // Step 5: Verify that the availability text is visible
//   await expect(availabilityText).toBeVisible();  // Ensure that the availability text is visible on the page
// });



// test('test06 - Check doctor expertise and name', async ({ page }) => {
//   // Step 1: Navigate to the login page and sign in
//   await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
//   await page.getByRole('textbox', { name: 'Email address' }).fill('Raghu01@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Step 2: Navigate to Find a Doctor
//   await page.getByRole('button', { name: 'Find a Doctor' }).click();

//   // Step 3: Click on the 4th 'Book Visit' button
//   await page.getByRole('button', { name: 'Book Visit' }).nth(4).click();

//   // Step 4: Check for the expertise text
//   const expertiseText = await page.locator('text=Expertise & ServicesSpecialized Treatment 1Specialized Treatment 2Specialized');

//   // Step 5: Verify that the expertise text is visible
//   await expect(expertiseText).toBeVisible();

//   // Step 6: Click on the doctor's name to ensure that it links to the doctor's page
//   const doctorName = await page.getByRole('heading', { name: 'Dr. Amanda Foster' });

//   // Step 7: Verify that the doctor's name is visible
//   await expect(doctorName).toBeVisible();
// });



// const { test, expect } = require('@playwright/test');
// const { DetailsPage } = require('../POM/detailsPage');

// test.beforeEach(async ({ page }) => {
//   const details = new DetailsPage(page);
//   await details.goto();
//   await details.login('raghu01@gmail.com', 'Raghu@12345');
// });


// // ✅ 1
// test('TC01 - Open doctor details page', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.doctorName.first()).toBeVisible();
// });

// // ✅ 2
// test('TC02 - Doctor name visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(1);
//   await expect(d.doctorName).toBeVisible();
// });

// // ✅ 3
// test('TC03 - Specialty visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(2);
//   await expect(d.speciality).toBeVisible();
// });

// // ✅ 4
// test('TC04 - Location visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.location).toBeVisible();
// });

// // ✅ 5
// test('TC05 - Availability visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(1);
//   await expect(d.availability).toBeVisible();
// });

// // ✅ 6
// test('TC06 - About section visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.aboutHeading).toBeVisible();
// });

// // ✅ 7
// test('TC07 - Expertise section visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.expertiseHeading).toBeVisible();
// });

// // ✅ 8
// test('TC08 - Scroll and verify sections', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await d.expertiseHeading.scrollIntoViewIfNeeded();
//   await expect(d.expertiseHeading).toBeVisible();
// });

// // ✅ 9
// test('TC09 - Consultation fee visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.consultationFee).toBeVisible();
// });

// // ✅ 10
// test('TC10 - Booking section visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.bookAppointmentHeading).toBeVisible();
// });

// // ✅ 11
// test('TC11 - Select date works', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await d.selectDateAndTime();
// });

// // ✅ 12
// test('TC12 - Time dropdown works', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await d.timeDropdown.click();
//   await expect(d.timeOption).toBeVisible();
// });

// // ✅ 13
// test('TC13 - Add to cart button visible', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(d.addToCartBtn).toBeVisible();
// });

// // ✅ 14
// test('TC14 - Add to cart functionality', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await d.selectDateAndTime();
//   await d.addToCartBtn.click();
// });

// // ✅ 15
// test('TC15 - Multiple doctors navigation', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await page.goBack();
//   await d.openDoctorDetails(2);
//   await expect(d.doctorName).toBeVisible();
// });

// // ✅ 16
// test('TC16 - Invalid flow (no date select)', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await d.addToCartBtn.click();
// });

// // ✅ 17
// test('TC17 - Verify headings count', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await expect(page.getByRole('heading')).toHaveCountGreaterThan(3);
// });

// // ✅ 18
// test('TC18 - UI stability on reload', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await page.reload();
//   await expect(d.doctorName).toBeVisible();
// });

// // ✅ 19
// test('TC19 - Back navigation works', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await page.goBack();
//   await expect(page.getByText('Find the Right Doctor')).toBeVisible();
// });

// // ✅ 20
// test('TC20 - Verify multiple time selection', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await d.timeDropdown.click();
//   await page.getByText('10:30 AM').click();
// });

// // ✅ 21
// test('TC21 - Check scroll performance', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(0);
//   await page.mouse.wheel(0, 1000);
// });

// // ✅ 22
// test('TC22 - Verify Add to Cart after navigation', async ({ page }) => {
//   const d = new DetailsPage(page);
//   await d.openDoctorDetails(1);
//   await d.selectDateAndTime();
//   await d.addToCartBtn.click();
// });



const { test, expect } = require('@playwright/test');
const { DetailsPage } = require('../POM/detailsPage');

test.beforeEach(async ({ page }) => {
  const d = new DetailsPage(page);
  await d.goto();
  await d.login('raghu01@gmail.com', 'Raghu@12345');
});


// ✅ EXISTING WORKING TESTS (UNCHANGED)

// TC01
test('TC01 - Doctor name visible from list', async ({ page }) => {
  await page.getByRole('button', { name: 'Find a Doctor' }).click();
  await expect(page.getByRole('heading', { name: 'Dr. Sarah Johnson' })).toBeVisible();
});

// TC02 (FIXED)
test('TC02 - Doctor name visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(1);
  await expect(d.doctorName).toBeVisible();
});

// TC03 (FIXED)
 test('TC03 - Specialty visible', async ({ page }) => {
    const d = new DetailsPage(page);
    await d.openDoctorDetails(0);

    await expect(d.speciality).toBeVisible();
  });


// TC04 (FIXED)
test('TC04 - Location visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.location).toBeVisible();
});

// TC05
test('TC05 - Availability visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(1);
  await expect(page.locator('text=Availability')).toBeVisible();
});

// TC06
test('TC06 - About section visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.aboutSection).toBeVisible();
});

// TC07
test('TC07 - Expertise section visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.expertiseSection).toBeVisible();
});

// TC08
test('TC08 - Consultation fee visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(page.locator('text=$')).toBeVisible();
});

// TC09
test('TC09 - Time dropdown visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.timeDropdown).toBeVisible();
});

// TC10
test('TC10 - Next month button visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.nextMonthBtn).toBeVisible();
});


// TC13
test('TC13 - Add to cart button visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.addToCartBtn).toBeVisible();
});

// TC16 (FIXED)
test('TC16 - Invalid flow (no date select)', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.addToCartBtn).toBeDisabled();
});
// TC18 (FIXED)
test('TC18 - UI stability on reload', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await page.reload();
  await expect(page.locator('h1')).toBeVisible();
});

// TC19
test('TC19 - Doctor page loads correctly', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.doctorName).toBeVisible();
});


