
class DetailsPage {
  constructor(page) {
    this.page = page;

    // Login
    this.loginBtn = page.getByRole('button', { name: 'Log in' });
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });

    // Navigation
    this.findDoctorBtn = page.getByRole('button', { name: 'Find a Doctor' });
    this.bookVisitBtn = page.getByRole('button', { name: 'Book Visit' });

    // Doctor Details
    this.doctorName = page.locator('h1'); // FIX strict mode
    this.speciality = page.locator('text=Neurology').first();
    this.location = page.locator('text=Center').first();

    // Sections
    this.aboutSection = page.getByRole('heading', { name: 'About the Doctor' });
    this.expertiseSection = page.getByRole('heading', { name: 'Expertise & Services' });

    // Appointment
    this.selectDate = page.getByText('Select Date', { exact: true });
    this.nextMonthBtn = page.getByRole('button', { name: 'Go to the Next Month' });
    this.timeDropdown = page.getByRole('combobox');
    this.addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
  }

  async goto() {
    await this.page.goto('https://medi-schedule--raghubakare143.replit.app/');
  }

  
  async login(email, password) {
    await this.loginBtn.waitFor();
    await this.loginBtn.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInBtn.click();
  }

  async openDoctorDetails(index = 0) {
    await this.findDoctorBtn.waitFor();
    await this.findDoctorBtn.click();
    await this.bookVisitBtn.nth(index).click();
  }

  async selectDateAndTime() {
    await this.selectDate.click();
    await this.nextMonthBtn.click();
    await this.page.locator('button:has-text("Saturday")').first().click();
    await this.timeDropdown.click();
    await this.page.getByText('10:30 AM').click();
  }
}

module.exports = { DetailsPage };