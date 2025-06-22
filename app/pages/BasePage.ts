import { Page } from "@playwright/test";
import { step } from "support/stepReporter";

export class BasePage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    @step("User opens FUR store")
    async goto(url: string) {
    await this.page.goto(url);
  }
}