import {Page} from "@playwright/test";
import { ProductsPage } from "./ProductsPage";
import { OurStoryPage } from "./OurStoryPage";
import { ContactPage } from "./ContactPage";
import { PaymentsPage } from "./PaymentsPage";

export class PageManager {
    productsPage: ProductsPage;
    ourStoryPage: OurStoryPage;
    contactPage: ContactPage;
    paymentsPage: PaymentsPage;

    constructor(page: Page){
        this.productsPage = new ProductsPage(page);
        this.ourStoryPage = new OurStoryPage(page);
        this.contactPage = new ContactPage(page);
        this.paymentsPage = new PaymentsPage(page);
    }
}