import { test } from "@fixture/page.fixtures";
import { createRandomUser, getProductName } from "utils/dataGenerator";

test.beforeEach(async ({ pages }) => {
  await pages.productsPage.goto("");
});

test("Verify that user can order t-shirt", async ({ pages }) => {
  const productName = getProductName();
  await pages.productsPage.product.openProductCardPage(productName);
  await pages.productsPage.cart.addProductToCart();
  await pages.productsPage.cart.checkout();

  const user = createRandomUser();
  await pages.paymentsPage.billingForm.fillOutBillingForm(
    user.name,
    user.email,
    user.street,
    user.apt_suite,
    user.city,
    user.country,
    user.state,
    user.zip
  );

  await pages.paymentsPage.billingForm.submitBillingForm();
  await pages.paymentsPage.paymentForm.fillOutPaymentForm(
    process.env.CARD_NUMBER,
    process.env.MM_YY,
    process.env.CVV
  );

  await pages.paymentsPage.paymentForm.submitPaymentsForm();
  await pages.paymentsPage.paymentStatus();
});
