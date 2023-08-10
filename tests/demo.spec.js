// add-products.js
const { chromium } = require('playwright');
const assert = require('assert');

// Define global variables
const browser = await chromium.launch();
const page = await browser.newPage();
const usernameLocator = page.locator('#user-name');
const passwordLocator = page.locator('#password');
const loginButtonLocator = page.locator('#login-button');
const productsTitleLocator = page.locator('.title');
const cartButtonLocator = page.locator('.shopping_cart_link');
const cartQuantityLocator = page.locator('.shopping_cart_badge');
const checkoutButtonLocator = page.locator('#checkout');
const finishButtonLocator = page.locator('#finish');
const orderMessageLocator = page.locator('.complete-header');

async function login() {
// Go to the login page
await page.goto('https://www.saucedemo.com/');
// Enter username and password
await usernameLocator.fill('standard_user');
await passwordLocator.fill('secret_sauce');
// Click on the login button
await loginButtonLocator.click();
// Check that the products title is displayed
await expect(productsTitleLocator).toHaveText(/Products/);
}

async function addProduct(productName) {
// Click on the add to cart button for the product
const addToCartButtonLocator = page.locator(`text=${productName} >> ../.. >> .btn_inventory`);
await addToCartButtonLocator.click();
}

async function checkCart(quantity) {
// Click on the cart button
await cartButtonLocator.click();
// Check that the cart quantity is correct
await expect(cartQuantityLocator).toHaveText(quantity);
}

async function checkout(total) {
// Click on the checkout button
await checkoutButtonLocator.click();
// Fill in the customer information
await page.fill('#first-name', 'Nguyen Van A');
await page.fill('#last-name', 'Nguyen Van A');
await page.fill('#postal-code', '123456');
// Click on the continue button
await page.click('#continue');
// Check that the total amount is correct
const totalAmountLocator = page.locator('.summary_total_label');
await expect(totalAmountLocator).toHaveText(total);
// Click on the finish button
await finishButtonLocator.click();
}

async function checkOrder(message) {
// Check that the order confirmation message is correct
await expect(orderMessageLocator).toHaveText(message);
}

test.beforeEach(async () => {
// Login to the website
await login();
})

test('User can add multiple products to the cart from the inventory page', async () => {
// Add three products to the cart: bike light, t-shirt, and onesie
await addProduct('Sauce Labs Bike Light');
await addProduct('Test.allTheThings() T-Shirt (Red)');
await addProduct('Sauce Labs Onesie');
// Check that the cart quantity is 3
await checkCart('3');
})

test('User can checkout and confirm the order', async () => {
// Add three products to the cart: bike light, t-shirt, and onesie
await addProduct('Sauce Labs Bike Light');
await addProduct('Test.allTheThings() T-Shirt (Red)');
await addProduct('Sauce Labs Onesie');
// Checkout and pay the total amount of $49.66
await checkout('Total: $49.66');
// Check that the order confirmation message is 'THANK YOU FOR YOUR ORDER'
await checkOrder('THANK YOU FOR YOUR ORDER');
})