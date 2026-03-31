import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;


    this.url = 'https://medi-schedule--raghubakare143.replit.app/login';

   
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });

    this.requiredError = page.locator('text=/required/i');
    this.invalidEmailError = page.locator('text=/Invalid email/i');
    this.invalidPassError = page.getByText('HTTP 401 : Invalid email or password');

    this.signupLink = page.getByRole('link', { name: /sign up for free/i });
  }

  async goto() {
    await this.page.goto('https://medi-schedule--raghubakare143.replit.app/login');
  }


  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }


  async clickLogin() {
    await this.signInBtn.click();
  }

  async clearEmail() {
    await this.emailInput.fill('');
  }

  async goToRegister() {
    await this.signupLink.click();
  }


  async expectLoginPage() {
    await expect(this.page).toHaveURL(/login/);
  }

  async expectRequiredError() {
    await expect(this.requiredError.first()).toBeVisible();
  }

  async expectInvalidEmailError() {
    await expect(this.invalidEmailError.first()).toBeVisible();
  }

  async expectInvalidPasswordError() {
    await expect(this.invalidPassError.first()).toBeVisible();
  }
}