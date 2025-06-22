import {Page} from "@playwright/test";
import { ProductsPage } from "./ProductsPage";
import { OurStoryPage } from "./OurStoryPage";
import { ContactPage } from "./ContactPage";

export class PageManager {
    productsPage: ProductsPage;
    ourStoryPage: OurStoryPage;
    contactPage: ContactPage;

    constructor(page: Page){
        this.productsPage = new ProductsPage(page);
        this.ourStoryPage = new OurStoryPage(page);
        this.contactPage = new ContactPage(page);
    }
}