import { Page} from "@playwright/test";
import { step } from "support/stepReporter";

export class ProductComponent {
    readonly page: Page;
    
    constructor (page: Page){
        this.page = page;
    }   

    @step("Getting the product's price on the product list page")
    async getPriceOnProductListPage(shirtName: string) {
        const product = this.page.locator('.product-details', {has: this.page.getByRole('heading', { name: shirtName })});
        const price = product.getByRole('paragraph').nth(1);
        return (await price.textContent()).trim();
    }

    @step("Getting the product's price on the product card")
    async getPriceOnProductCard(shirtName: string) {
        await this.page.getByRole("link", {name: shirtName}).click();
        const price = this.page.getByRole("heading", { name: "$" });
        return (await price.textContent()).trim();
    }

    @step("Getting the product's description on the product list page")
    async getDescriptionOnProductListPage(shirtName: string) {
        const product = this.page.locator('li', {has: this.page.getByRole('link', { name: shirtName }),});
        const productDescription = product.locator('.product-description')
        return (await productDescription.textContent()).trim(); 
    }

    @step("Getting the product's description on the product card")
    async getDescriptionOnProductCard(shirtName: string) {
        await this.page.getByRole("link", {name: shirtName}).click();
        const productDescription = this.page.locator(".product-details").getByRole("paragraph").nth(0);
        return (await productDescription.textContent()).trim(); 
    }

    @step("User opens the product card page")
    async openProductCardPage(shirtName: string){
        await this.page.getByRole("link", {name: shirtName}).click();
        await this.page.locator(".hero").getByRole("heading", {name: shirtName}).waitFor();
    }
}
