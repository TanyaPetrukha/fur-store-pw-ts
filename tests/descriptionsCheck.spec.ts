import {expect} from "@playwright/test";
import { test } from "@fixture/page.fixtures";

import { TestDataLoader } from "utils/testDataLoader";


test.beforeEach(async ({ pages }) => {
  await pages.productsPage.goto("");
});

test.describe("Verify description for products on the product list page", () => {
  const productDescriptions = TestDataLoader.loadTestData("products.json");
  for (const { name, description } of productDescriptions) {
    test(`Verify description of ${name} T-shirt`, async ({ pages }) => {
      const currentProductDescription =
      await pages.productsPage.shirtComponent.getDescriptionOnProductListPage(name);
      const expectedStart = description.slice(0, 40);
      expect(currentProductDescription).toContain(expectedStart);
    });
  }
});

test.describe("Verify description for the product on the product card page", () => {
  const productDescriptions = TestDataLoader.loadTestData("products.json");
  for (const { name, description } of productDescriptions) {
    test(`Verify description of ${name} T-shirt`, async ({ pages }) => {
      const currentProductDescription =
      await pages.productsPage.shirtComponent.getDescriptionOnProductCard(name);
      expect(currentProductDescription).toEqual(description)
    });
  }
});
