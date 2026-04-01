
export default class SearchPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });

    this.findDoctorsLink = page.getByRole('link', { name: 'Find Doctors' });
    this.findDoctorBtn = page.getByRole('button', { name: 'Find a Doctor' });

    this.searchBox = page.locator('input[placeholder*="Search"]');
    this.searchBtn = page.getByRole('button', { name: 'Search' });

    this.sortDropdown = page.locator('select').nth(1);
    this.filterDropdown = page.locator('select').first();

    this.doctorCards = page.locator('.doctor-card');
    this.doctorRating = page.locator('.doctor-rating');
    this.doctorFee = page.locator('.doctor-fee');
  }

  async gotoLogin() {
    await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async goToFindDoctors() {
    await this.findDoctorsLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async goToFindDoctorBtn() {
    await this.findDoctorBtn.click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchDoctor(name) {
    await this.searchBox.fill(name);
    await this.searchBtn.click();
  }

  getDoctorByName(name) {
    return this.page.getByRole('heading', { name });
  }

  getText(text) {
    return this.page.getByText(text, { exact: false });
  }

  async selectSort(value) {
    await this.sortDropdown.waitFor({ state: 'visible' });
    await this.sortDropdown.selectOption(value);
  }

  async selectFilter(label) {
    await this.filterDropdown.waitFor({ state: 'visible' });
    await this.filterDropdown.selectOption({ label });
  }

  async getRatings() {
    const ratings = await this.doctorRating.allTextContents();
    return ratings.map(r => parseFloat(r.replace(/[^\d.]/g, '')));
  }

  async getFees() {
    const fees = await this.doctorFee.allTextContents();
    return fees.map(f => parseFloat(f.replace(/[^\d.]/g, '')));
  }
}