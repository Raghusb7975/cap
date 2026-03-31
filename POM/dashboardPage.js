class DashboardPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.loginBtn = page.getByRole('button', { name: 'Log in' });
    this.email = page.getByRole('textbox', { name: 'Email address' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });

    this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });

    // Dashboard elements
    this.welcomeText = page.getByText('Welcome back');
    this.userHeading = page.getByRole('heading', { name: /raghu/i });

    this.upcomingCount = page.locator('text=Upcoming');
    this.completedCount = page.locator('text=Completed');
    this.totalSpent = page.locator('text=Total Spent');

    // Buttons
    this.findDoctorBtn = page.getByRole('button', { name: 'Find a Doctor' });
    this.viewCartBtn = page.getByRole('button', { name: 'View Cart' });

    // Cart
    this.cartHeading = page.getByRole('heading', { name: 'Your Appointments Cart' });
    this.emptyCartMsg = page.getByText('Your cart is empty');

    // Tabs
    this.upcomingTab = page.getByRole('tab', { name: 'Upcoming' });
    this.pastTab = page.getByRole('tab', { name: 'Past Records' });

    // Appointment
    this.viewDetailsBtn = page.getByRole('button', { name: 'View Details' });

    // Profile
    this.profileLink = page.getByRole('link', { name: /raghu/i });
    this.accountHeading = page.getByRole('heading', { name: 'Account Settings' });
    this.fullName = page.getByRole('textbox', { name: 'Full Name' });
    this.dob = page.getByRole('textbox', { name: 'Date of Birth' });
    this.phone = page.getByRole('textbox', { name: 'Phone Number' });
    this.saveBtn = page.getByRole('button', { name: 'Save Changes' });
  }

  async goto() {
    await this.page.goto('https://medi-schedule--raghubakare143.replit.app/');
  }

  async login(email, password) {
    await this.loginBtn.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInBtn.click();
  }

  async goToDashboard() {
    await this.dashboardLink.click();
  }

  async openCart() {
    await this.viewCartBtn.click();
  }

  async openProfile() {
    await this.profileLink.click();
  }
}

module.exports = { DashboardPage };