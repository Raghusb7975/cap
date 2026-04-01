const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../POM/dashboardPage');

test.beforeEach(async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.goto();
  await dash.login('raghu01@gmail.com', 'Raghu@12345');
  await dash.goToDashboard();
});

test.skip('TC01 - Dashboard loads successfully', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.Welcome).toBeVisible();
});



test('TC02 - User name visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.userHeading).toBeVisible();
});

test('TC04 - Completed count visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.completedCount).toBeVisible();
});

test('TC05 - Total spent visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await expect(dash.totalSpent).toBeVisible();
});

test('TC06 - Navigate to Find Doctor', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.findDoctorBtn.click();
  await expect(page.getByText('Find the Right Doctor')).toBeVisible();
});

test('TC07 - Open Cart page', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await expect(dash.cartHeading).toBeVisible();
});

test.fail('TC08 - Empty cart message', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await expect(dash.emptyCartMsg).toBeVisible();
});

test('TC09 - Navigate back to Dashboard', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await dash.goToDashboard();
  await expect(dash.WelcomeText).toBeVisible();
});

test('TC10 - Click Upcoming tab', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.upcomingTab.click();
  await expect(page.getByText('My Appointments')).toBeVisible();
});

test('TC11 - Click Past Records tab', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.pastTab.click();
});

test('TC12 - View appointment details', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.upcomingTab.click();
  await dash.viewDetailsBtn.first().click();
});

test('TC13 - Booking confirmation visible', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.upcomingTab.click();
  await dash.viewDetailsBtn.first().click();
  await expect(page.getByText('Booking Confirmed')).toBeVisible();
});


test('TC14 - Navigate to profile page', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await expect(dash.accountHeading).toBeVisible();
});

test('TC15 - Edit full name field', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.fullName.fill('Raghu Test');
});


test('TC16 - Enter DOB', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.dob.fill('2026-03-29');
});


test('TC17 - Enter phone number', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.phone.fill('9876543210');
});


test('TC18 - Save profile changes', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openProfile();
  await dash.saveBtn.click();
});


test('TC19 - Logout button visible', async ({ page }) => {
  await expect(page.locator('.lucide-log-out')).toBeVisible();
});

test('TC20 - Dashboard reload stability', async ({ page }) => {
  await page.reload();
  await expect(page.getByText('Welcome back')).toBeVisible();
});


test('TC21 - Multiple navigation stability', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.openCart();
  await dash.goToDashboard();
  await dash.findDoctorBtn.click();
  await dash.goToDashboard();
});


test('TC22 - Verify headings present', async ({ page }) => {
  await expect(page.getByRole('heading')).toHaveCountGreaterThan(0);
});