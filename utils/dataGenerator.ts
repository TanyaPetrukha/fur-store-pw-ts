import {faker, fakerEN_US} from "@faker-js/faker";
import { TestDataLoader } from "./testDataLoader";

export function createRandomUser() {
  return {
    name: faker.internet.username({ firstName: "QA-Test" }),
    email: faker.internet.email({ firstName: "QA-Test" }),
    street: fakerEN_US.location.street(),
    apt_suite: fakerEN_US.location.buildingNumber(),
    city: fakerEN_US.location.city(),
    country: "United States",
    state: fakerEN_US.location.state(),
    zip: fakerEN_US.location.zipCode()
  };
}

export function getProductName(){
    const allProducts = TestDataLoader.loadTestData("products.json");
    const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
    return randomProduct.name;
}
