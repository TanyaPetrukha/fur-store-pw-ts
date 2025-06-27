import {Page, Locator} from "@playwright/test";
import { step } from "support/stepReporter";

export class CartComponent{
    page: Page;
    locators: CartComponentLocators;

    constructor(page: Page){
        this.page = page
        this.locators = new CartComponentLocators(page);
    }

    @step("User adds the product to the Cart")
    async addProductToCart(){
        await this.locators.addToCartButton.click();
        await this.locators.cartTitle.waitFor();
    }

    @step("User clicks on the Checkout button")
    async checkout(){
        await this.locators.checkoutButton.click()
    }

}

class CartComponentLocators{
    page: Page;
    addToCartButton: Locator;
    cartTitle: Locator;
    checkoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.addToCartButton = page.getByRole("button", {name: "Add to cart"});
        this.cartTitle = page.getByRole("heading", {name: "Cart summary"});
        this.checkoutButton = page.getByRole("button", {name: "Checkout"});
    }
}