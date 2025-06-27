import { Page } from "@playwright/test";
import { step } from "support/stepReporter";
import { NavigationComponent } from "app/components/NavigationComponent";

export class BasePage {
    readonly page: Page;
    readonly navigationComponent: NavigationComponent;

    constructor(page: Page){
        this.page = page;
        this.navigationComponent = new NavigationComponent(page);
    }

    @step("User opens FUR store")
    async goto(url: string) {
    await this.page.goto(url);
  }
}