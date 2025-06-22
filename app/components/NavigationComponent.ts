import { Page, Locator } from '@playwright/test';
import { step } from 'support/stepReporter';

export class NavigationComponent {
  readonly page:  Page;
  readonly logo: Locator;


  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.getByRole('link', { name: 'Fur', exact: true });
  }

  @step("User navigates to the page")
  async navigateTo(link: 'Our Story' | 'Contact' | 'Products') {
    await this.page.getByRole('navigation').getByRole('link', { name: link }).click();
  }

  @step("User clicks on the Logo")
  async clickOnLogo() {
    await this.logo.click();
  }
}