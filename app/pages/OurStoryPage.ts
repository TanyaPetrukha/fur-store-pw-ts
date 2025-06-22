import {Locator, Page} from "@playwright/test";

import { BasePage } from "./BasePage";
import { NavigationComponent } from "app/components/NavigationComponent";

export class OurStoryPage extends BasePage {
    readonly navigationComponent: NavigationComponent;
    readonly locators: OurStoryPageLocators;

    constructor(page: Page){
        super(page);
        this.navigationComponent = new NavigationComponent(page);
        this.locators = new OurStoryPageLocators(page);
    }
    
}

class OurStoryPageLocators{
    page: Page;
    ourStoryPageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.ourStoryPageTitle = this.page.getByRole("heading", {name: "Our story"});
    }

}