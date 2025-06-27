import {Page, Locator} from "@playwright/test";
import { step } from "support/stepReporter";

export class BillingFormComponent{
    page: Page;
    locators: BillingFormLocators;

    constructor(page:Page){
        this.page = page;
        this.locators = new BillingFormLocators(page);
    }

    @step("User fills out billing form")
    async fillOutBillingForm(
        name: string,
        email: string,
        street: string,
        apt_suite: string,
        city: string,
        country: string,
        province_state: string,
        postal_zip: string
    ){
        await this.locators.fullNameField.fill(name);
        await this.locators.emailField.fill(email);
        await this.locators.streetAddressField.fill(street);
        await this.locators.aptSuiteField.fill(apt_suite);
        await this.locators.cityField.fill(city);
        await this.locators.countryField.fill(country);
        await this.page.getByText(country).click();
        await this.locators.provinceStateField.fill(province_state);
        await this.page.getByText(province_state).click();
        await this.locators.postalZipCodeField.fill(postal_zip);
    }

    @step("User submits the billing form")
    async submitBillingForm(){
        await this.locators.continuePaymentButton.click();
    }

}

class BillingFormLocators{
    page:Page;
    formName: Locator;
    fullNameField: Locator;
    emailField: Locator;
    streetAddressField: Locator;
    aptSuiteField: Locator;
    cityField: Locator;
    countryField: Locator;
    provinceStateField: Locator;
    postalZipCodeField: Locator;
    continuePaymentButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.formName = this.page.getByRole("heading", {name: "Billing"});
        this.fullNameField = this.page.getByRole("textbox", {name: "Full name"});
        this.emailField = this.page.getByRole("textbox", {name: "Email"});
        this.streetAddressField = this.page.getByRole("textbox", {name: "Street address"});
        this.aptSuiteField = this.page.getByRole("textbox", {name: "Apt/Suite"});
        this.cityField = this.page.getByRole("textbox", {name: "City"});
        this.countryField = this.page.getByLabel("Country");
        this.provinceStateField = this.page.getByRole("textbox", {name: "Province/State"});
        this.postalZipCodeField = this.page.getByRole("textbox", {name: "Postal/ZIP code"});
        this.continuePaymentButton = this.page.getByRole("button", {name: "Continue to payment"});
    }
    
}
