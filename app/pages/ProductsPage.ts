import { Locator, Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { ShirtComponent } from "app/components/ShirtComponent";
import { NavigationComponent } from "app/components/NavigationComponent";


export class ProductsPage extends BasePage {
    readonly locators: ProductsPageLocators;
    readonly shirtComponent: ShirtComponent;
    readonly navigationComponent: NavigationComponent;

    constructor(page: Page) {
        super(page);
        this.locators = new ProductsPageLocators(page);
        this.shirtComponent= new ShirtComponent(page);
        this.navigationComponent = new NavigationComponent(page);
    }
}

class ProductsPageLocators {
      page: Page;
      productPageTitle: Locator;
      productsSection: Locator;
      productPageSubTitle: Locator;
      
    
      constructor(page: Page) {
        this.page = page;
        this.productsSection = this.page.locator(".product-list");
        this.productPageTitle = this.page.getByRole("heading", {name: "Find your spirit animal"});
        this.productPageSubTitle = this.page.getByRole("paragraph").getByText("The animal friendly clothing company");
    }
}