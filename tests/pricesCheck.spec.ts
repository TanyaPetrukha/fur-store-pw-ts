import { test } from "@fixture/page.fixtures";
import { TestDataLoader } from "utils/testDataLoader";


test.beforeEach(async ({ pages }) => {
  await pages.productsPage.goto("");
});

test.describe("Verify prices for products on the product list page", () => {
  const productPrices = TestDataLoader.loadTestData("products.json");

  for (const { name, price } of productPrices) {
    test(`Verify price of ${name} T-shirt`, async ({ pages }) => {
      const currentProductPrice =
        await pages.productsPage.product.getPriceOnProductListPage(name);
      if (currentProductPrice !== price) {
        throw new Error(
          `Price mismatch for the "${name}" t-shirt. Expected price -  ${price}, but got - ${currentProductPrice}.`
        );
      } else {
        console.log(
          `Current price for the "${name}" t-shirt: ${currentProductPrice} is equal expected price: ${price}`
        );
      }
    });
  }
});

test.describe("Verify price for the product on the product card page", () => {
  const productPrices = TestDataLoader.loadTestData("products.json");

  for (const { name, price } of productPrices) {
    test(`Verify price of ${name} T-shirt`, async ({ pages }) => {
      const currentProductPrice =
        await pages.productsPage.product.getPriceOnProductCard(name);
      if (currentProductPrice !== price) {
        throw new Error(
          `Price mismatch for the "${name}" t-shirt. Expected price -  ${price}, but got - ${currentProductPrice}.`
        );
      } else {
        console.log(
          `Current price for the "${name}" t-shirt: ${currentProductPrice} is equal expected price: ${price}`
        );
      }
    });
  }
});
