
// import { test, expect} from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//     // Go to the login page
//     await page.goto('https://hoamau24h.com/');
//     // Enter username and password
//     await page.locator("//input[@name='user-name']").fill('standard_user');
//     await page.locator("//input[@name='password']").fill('secret_sauce');
//     // Click on the login button
//     await page.locator("//input[@id='login-button']").click();
//     // Check that the products title is displayed
//     const locator = page.locator("//span[contains(text(),'Products')]");
//     await expect(locator).toHaveText(/Products/);
//     // Wait for 3 seconds
//     await page.waitForTimeout(3000)
// })

// test('User can add multiple products to the cart', async ({ page }) => {
//     // Click on the add to cart buttons for the bike light and the t-shirt
//     await page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
//     await page.locator('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
//     // Click on the onesie link to go to its detail page
//     await page.locator("//div[contains(text(),'Sauce Labs Onesie')]").click();
//     // Click on the add to cart button for the onesie
//     await page.locator('//*[@id="add-to-cart-sauce-labs-onesie"]').click();
//     await page.waitForTimeout(3000)
//     // Check that the cart quantity is 3
//     const cartButtonLocator = page.locator("//a[@class='shopping_cart_link']")
//     await cartButtonLocator.click();
//     const cartQuantityLocator = page.locator("//span[@class='shopping_cart_badge']");
//     // Check that the cart quantity is correct
//     await expect(cartQuantityLocator).toHaveText('3');
//     await page.pause();
// })
// test.afterEach(async ({ page }) => {
//     // Close the page
//     await page.close()
// })




