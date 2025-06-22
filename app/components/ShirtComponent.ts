import { Page, Locator } from "@playwright/test";

export class ShirtComponent {
    page: Page;
    
    constructor (page: Page){
        this.page = page;
    }

    async getPrice(shirtName: string) {
        const product = this.page.locator('li', {has: this.page.getByRole('link', { name: shirtName })});
        const price = product.locator('p');
        return await price.textContent();
    }

    async getDescription(shirtName: string) {
        const product = this.page.locator('li', {has: this.page.getByRole('link', { name: shirtName }),});
        const productDescription = product.locator('.product-description')
        return await productDescription.textContent(); 
  }
}

// class ShirtComponentLocators {
//     page: Page;
//     shirtPrice: Locator;
//     shirtName: Locator

//     constructor (page: Page){
//         this.page =page;
//         this.shirtPrice = this.page.locator(".product-description ~ p.");
//         this.shirtName = this.page.locator(".product-details ~ ")
//     }
// }