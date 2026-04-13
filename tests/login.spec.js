import{expect, test} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';   
import {HomePage} from '../pages/homePage';


test("Login with valid credentials", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotologinPage();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    expect(page.locator('.title')).toHaveText('Products');

    await page.waitForTimeout(2000);

    //Home
    const homePage = new HomePage(page);
    await homePage.verifyProductList('Sauce Labs Backpack');
        await page.waitForTimeout(2000);




})