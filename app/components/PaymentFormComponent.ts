import {Page, Locator} from "@playwright/test";
import { step } from "support/stepReporter";

export class PaymentFormComponent{
    page: Page;
    locators: PaymentFormLocators;

    constructor(page:Page){
        this.page = page;
        this.locators = new PaymentFormLocators(page);
    }

    @step("User fill out the payment form")
    async fillOutPaymentForm(cardNumber: string, mm_yy: string, cvv: string){
         await this.locators.cardNumberField.fill(cardNumber);
        await this.locators.mm_yy_field.fill(mm_yy);
        await this.locators.cvv_field.fill(cvv);
    }

    @step("User submits the payments form")
    async submitPaymentsForm(){
        await this.locators.placeOrderButton.click();
    }
}

class PaymentFormLocators{
    page: Page;
    cardNumberField: Locator;
    mm_yy_field: Locator;
    cvv_field: Locator;
    placeOrderButton: Locator;


    constructor(page: Page){
        this.page = page;
        this.cardNumberField = this.page.frameLocator("iframe").getByRole("textbox", {name: "Card number"});
        this.mm_yy_field = this.page.frameLocator("iframe").getByRole("textbox", {name: "MM/YY"});
        this.cvv_field = this.page.frameLocator("iframe").getByRole("textbox", {name: "CVV"});
        this.placeOrderButton = this.page.getByRole("button", {name: "Place order"});
    }
}
