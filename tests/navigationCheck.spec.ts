import { expect } from "@playwright/test";
import { test } from "@fixture/page.fixtures";

test.beforeEach(async({pages}) => {
 await pages.productsPage.goto('');
})

test("Verify that user can navigate to the Our Story ", async({pages}) => {
    await pages.ourStoryPage.navigationComponent.navigateTo('Our Story');
    await expect(pages.ourStoryPage.locators.ourStoryPageTitle).toBeVisible();
});

test("Verify that user can navigate to the Products page ", async({pages}) => {
    await pages.productsPage.navigationComponent.navigateTo('Our Story');
    await pages.productsPage.navigationComponent.navigateTo('Products');
    await expect(pages.productsPage.locators.productPageTitle).toBeVisible();
    await expect(pages.productsPage.locators.productPageSubTitle).toBeVisible();
});

test("Verify that user can navigates to the Contact page", async({pages}) => {
    await pages.contactPage.navigationComponent.navigateTo("Contact");
    await expect(pages.contactPage.locators.contactPageTitle).toBeVisible()
})

test("Verify that user can navigate to the Products page by clicking the Logo", async({pages}) => {
    await pages.contactPage.navigationComponent.navigateTo("Contact");
    await pages.contactPage.navigationComponent.clickOnLogo();
    await expect(pages.productsPage.locators.productPageTitle).toBeVisible();
    await expect(pages.productsPage.locators.productPageSubTitle).toBeVisible();
});
