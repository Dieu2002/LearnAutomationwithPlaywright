import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@name='user-name']").click()
    await page.locator("//input[@name='user-name']").fill('standard_user');
    await page.locator("//input[@name='password']").click()
    await page.locator("//input[@name='password']").fill('secret_sauce');
    await page.locator("//input[@id='login-button']").click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(3000)
})
test.afterEach(async ({ page }) => {
    await page.close()
})
test('Add product to add to cart successfully', async ({ page }) => {
    await page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    await page.locator("//div[contains(text(),'Sauce Labs Onesie')]").click();
    await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=2')
    await page.locator('//*[@id="add-to-cart-sauce-labs-onesie"]').click();
    await page.waitForTimeout(3000)

})
    // test('logout', async ({ page }) => {
        // await page.locator('text=Open Menu').click();
        // await page.locator('text=Logout').click();
        // await page.waitForURL('https://www.saucedemo.com')
    // })


