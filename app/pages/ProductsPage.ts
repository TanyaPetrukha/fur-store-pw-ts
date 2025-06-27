import { Locator, Page } from "@playwright/test";

import { BasePage } from "./BasePage";
import { ProductComponent } from "app/components/ProductComponent";
import { CartComponent } from "app/components/CartComponent";


export class ProductsPage extends BasePage {
    readonly locators: ProductsPageLocators;
    readonly product: ProductComponent;
    readonly cart: CartComponent;
    

    constructor(page: Page) {
        super(page);
        this.locators = new ProductsPageLocators(page);
        this.product = new ProductComponent(page);
        this.cart = new CartComponent(page);
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