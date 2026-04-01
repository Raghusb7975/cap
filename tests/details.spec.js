const { test, expect } = require('@playwright/test');
const { DetailsPage } = require('../POM/detailsPage');

test.beforeEach(async ({ page }) => {
  const d = new DetailsPage(page);
  await d.goto();
  await d.login('raghu01@gmail.com', 'Raghu@12345');
});

test('TC01 - Doctor name visible from list', async ({ page }) => {
  await page.getByRole('button', { name: 'Find a Doctor' }).click();
  await expect(page.getByRole('heading', { name: 'Dr. Sarah Johnson' })).toBeVisible();
});

test('TC02 - Doctor name visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(1);
  await expect(d.doctorName).toBeVisible();
});

 test('TC03 - Specialty visible', async ({ page }) => {
    const d = new DetailsPage(page);
    await d.openDoctorDetails(0);

    await expect(d.speciality).toBeVisible();
  });

test('TC04 - Location visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.location).toBeVisible();
});

test('TC05 - Availability visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(1);
  await expect(page.locator('text=Availability')).toBeVisible();
});

test('TC06 - About section visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.aboutSection).toBeVisible();
});

test('TC07 - Expertise section visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.expertiseSection).toBeVisible();
});


test('TC08 - Consultation fee visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(page.locator('text=$')).toBeVisible();
});

test('TC09 - Time dropdown visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.timeDropdown).toBeVisible();
});

test('TC10 - Next month button visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.nextMonthBtn).toBeVisible();
});

test('TC13 - Add to cart button visible', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.addToCartBtn).toBeVisible();
});

test('TC16 - Invalid flow (no date select)', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.addToCartBtn).toBeDisabled();
});

test('TC18 - UI stability on reload', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await page.reload();
  await expect(page.locator('h1')).toBeVisible();
});


test('TC19 - Doctor page loads correctly', async ({ page }) => {
  const d = new DetailsPage(page);
  await d.openDoctorDetails(0);
  await expect(d.doctorName).toBeVisible();
});


