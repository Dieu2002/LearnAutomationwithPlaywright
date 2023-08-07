import { test, expect } from '@playwright/test';

import { LoginPage } from '../page/login';

test('test', async ({ page }) => {

    const Login = new LoginPage(page)
    await Login.gotoLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!')
    const locator = page.locator("//a//i[contains(text(),'Logout')]")
    await expect(locator).toHaveText(/Logout/)
    await page.pause()
});