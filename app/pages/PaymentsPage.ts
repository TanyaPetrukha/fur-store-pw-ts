import { Locator, Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { BillingFormComponent } from "app/components/BillingFormComponent";
import { PaymentFormComponent } from "app/components/PaymentFormComponent";
import { step } from "support/stepReporter";



export class PaymentsPage extends BasePage {
  readonly locators: PaymentsPageLocators;
  readonly billingForm: BillingFormComponent;
  readonly paymentForm: PaymentFormComponent;

  constructor(page: Page) {
    super(page);
    this.locators = new PaymentsPageLocators(page);
    this.billingForm = new BillingFormComponent(page);
    this.paymentForm = new PaymentFormComponent(page);
  }

  @step("User sees information about the payment status")
  async paymentStatus() {
    if (await this.locators.successfulPayment.isVisible()) {
      console.log("The payment was successful");
    } else if (await this.locators.unableToProcessPayment.isVisible()) {
      throw new Error("Unable to process payment");
    } else {
      throw new Error("Payment status is unclear");
    }
  }
}

class PaymentsPageLocators {
      page: Page;
      continueShoppingButton: Locator;
      orderSummary: Locator;
      successfulPayment: Locator;
      unableToProcessPayment: Locator;
      
    
      constructor(page: Page) {
        this.page = page;
        this.continueShoppingButton = this.page.getByRole("button", {name: "Continue shopping"});
        this.orderSummary = this.page.getByRole("heading", {name: "Order summary"});
        this.successfulPayment = this.page.getByRole("heading", { name: "Thank you for your order"});
        this.unableToProcessPayment = this.page.getByRole("heading", {name: "Unable to process payment"});
    }
}