class RegisterPage {
  constructor(page) {
    this.page = page;

    // URL
    this.url = 'https://medi-schedule--raghubakare143.replit.app/register';

    // Form fields
    this.nameInput = page.getByRole('textbox', { name: 'Full Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone Number' });
    this.dobInput = page.getByRole('textbox', { name: 'Date of Birth' });

    // Gender dropdown
    this.genderDropdown = page.getByRole('combobox');
    this.genderMale = page.getByRole('option', { name: 'Male', exact: true });

    // Buttons
    this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });

    // Links
    this.loginLink = page.getByRole('link', { name: 'Log in instead' });

    // Common messages
    this.phoneRequired = page.getByText('Phone number is required');
    this.dobRequired = page.getByText('Date of birth is required');
    this.nameValidation = page.getByText('Name must be at least 2 characters');
    this.emailExists = page.getByText(/already|exists|email/i).first();
    this.passwordError = page.getByText(/at least/i).first();
    this.successMessage = page.getByText(/success|account created|registered/i).first();
  }

  // ---------- Actions ----------

  async goto() {
    await this.page.goto(this.url);
  }

  async fillName(name) {
    await this.nameInput.fill(name);
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async fillPhone(phone) {
    await this.phoneInput.fill(phone);
  }

  async fillDOB(dob) {
    await this.dobInput.fill(dob);
  }

  async selectGender() {
    await this.genderDropdown.click();
    await this.genderMale.click();
  }

  async clickCreateAccount() {
    await this.createAccountBtn.click();
  }

  async clickLoginInstead() {
    await this.loginLink.click();
  }

  // ---------- Combined Actions (VERY IMPORTANT) ----------

  async registerUser({ name, email, password, phone, dob, gender = true }) {
    if (name) await this.fillName(name);
    if (email) await this.fillEmail(email);
    if (password) await this.fillPassword(password);
    if (phone) await this.fillPhone(phone);
    if (dob) await this.fillDOB(dob);
    if (gender) await this.selectGender();

    await this.clickCreateAccount();
  }
}

module.exports = RegisterPage;