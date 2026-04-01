import { test, expect } from '@playwright/test';
import SearchPage from '../POM/searchPage';

test.beforeEach(async ({ page }) => {
  const search = new SearchPage(page);

  await search.gotoLogin();
  await search.login('raghu01@gmail.com', 'Raghu@12345');
});


test('Search doctor name', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctors();
  await search.searchDoctor('Dr. Michael Chen');

  await expect(search.getDoctorByName('Dr. Michael Chen')).toBeVisible();
});

test('Verify Showing 10 doctors', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctors();

  await expect(page.getByText('Showing 10 doctors').first()).toBeVisible();
});

// ✅ TC03
test('Search raghu or no doctors', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctors();
  await search.searchDoctor('raghu');

  await expect(
    page.getByText('No doctors found').first()
      .or(page.getByText('raghu').first())
  ).toBeVisible();
});


test('Search Cardiology', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctors();
  await search.searchDoctor('Cardiology');

  await expect(page.getByText('Cardiology').first()).toBeVisible();
});

test('Sort rating descending', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctors();
  await search.selectSort('rating');

  await page.waitForTimeout(2000);

  const ratings = await search.getRatings();
  const sorted = [...ratings].sort((a, b) => b - a);

  expect(ratings).toEqual(sorted);
});

test('Filter Orthopedics', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctorBtn();

  const orthoBtn = page.getByRole('button', { name: 'Orthopedics' });
  await orthoBtn.click();

  await expect(orthoBtn).toBeVisible(); 
});

test('Sort fee ascending', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctorBtn();
  await search.selectSort('fee_asc');

  await page.waitForTimeout(2000);

  const fees = await search.getFees();
  const sorted = [...fees].sort((a, b) => a - b);

  expect(fees).toEqual(sorted);
});

test('Sort by experience', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctorBtn();
  await search.selectSort('experience');

  await expect(page.locator('text=exp').first()).toBeVisible();
});

test('Sort fee descending', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctorBtn();
  await search.selectSort('fee_desc');

  await page.waitForTimeout(2000);

  const fees = await search.getFees();
  const sorted = [...fees].sort((a, b) => b - a);

  expect(fees).toEqual(sorted);
});

test('Filter Psychiatry', async ({ page }) => {
  const search = new SearchPage(page);

  await search.goToFindDoctorBtn();
  await search.selectFilter('Psychiatry');

  await expect(
    page.getByRole('heading', { name: 'Dr. Amanda Foster' })
  ).toBeVisible();
});




test('test01- search a doctor name', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Find Doctors' }).click();

  await page.getByRole('textbox', { name: 'Search by name, specialty or' }).fill('Dr. Michael Chen');
  await page.getByRole('button', { name: 'Search' })

  const doctorName = page.locator('h3', { hasText: 'Dr. Michael Chen' });
  await expect(doctorName).toBeVisible(); 
});



test('test', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Find a Doctor' }).click();
  await page.getByRole('combobox').nth(1).selectOption('fee_asc');
  await expect(page.getByText('Consultation Fee$80Book Visit')).toBeVisible();

});



test('search doctor by oncology', async ({ page }) => {
  await page.goto('https://medi-schedule--raghubakare143.replit.app/login');

 
  await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();


  await page.getByRole('link', { name: 'Find Doctors' }).click();

  const searchBox = page.getByRole('textbox', { name: 'Search by name, specialty or' });
  await searchBox.fill('oncology');


  const oncologyOption = page.locator('span', { hasText: /^Oncology$/ });

  await expect(oncologyOption).toBeVisible();

  
  await oncologyOption.click();
});

  test(' Login successfully', async ({ page }) => {
    await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
    await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('button', { name: 'Find a Doctor' })).toBeVisible();
  });

  test('Navigate to Find a Doctor', async ({ page }) => {
    await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
    await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Find a Doctor' }).click();
    await expect(page.getByRole('button', { name: 'Book Visit' }).first()).toBeVisible();
  });

  test('Book a Doctor Visit', async ({ page }) => {
    await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
    await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Find a Doctor' }).click();
    await page.getByRole('button', { name: 'Book Visit' }).nth(1).click();
    await page.getByText('Children\'s Health Center').click();
    await page.getByText('Select date and time').click();
    await expect(page.getByRole('link', { name: 'Appointments Cart' })).toBeVisible();
  });

  test(' Appointments Cart navigation', async ({ page }) => {
    await page.goto('https://medi-schedule--raghubakare143.replit.app/login');
    await page.getByRole('textbox', { name: 'Email address' }).fill('raghu01@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Raghu@12345');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Appointments Cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your Appointments Cart' })).toBeVisible();
    await page.getByRole('link', { name: 'Find Doctors' }).click();
    await expect(page.getByRole('button', { name: 'Book Visit' }).first()).toBeVisible();
  });
