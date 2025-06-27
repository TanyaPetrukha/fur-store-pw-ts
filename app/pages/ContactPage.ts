import {Page, Locator} from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage{
    readonly locators: ContactPageLocators;

    constructor(page: Page){
        super(page);
        this.locators = new ContactPageLocators(page);
    }
}

class ContactPageLocators{
    page: Page;
    contactPageTitle: Locator;

    constructor(page:Page){
        this.page = page;
        this.contactPageTitle = this.page.getByRole("heading", {name: "Get in touch"});
    }
}