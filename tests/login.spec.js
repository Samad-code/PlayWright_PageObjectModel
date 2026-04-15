import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';


test("Login with valid credentials", async ({ page }) => {


    //Login
    const loginPage = new LoginPage(page);
    await loginPage.gotologinPage();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    expect(page.locator('.title')).toHaveText('Products');

    await page.waitForTimeout(2000);

    //Home
    const homePage = new HomePage(page);
    await homePage.verifyProductList('Sauce Labs Backpack');
    //expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    await page.waitForTimeout(2000);

    await homePage.addToCart('Sauce Labs Bolt T-Shirt');
    await page.waitForTimeout(2000);

    //Cart
    const cartPage = new CartPage(page);
    await cartPage.verifyCart('Sauce Labs Bolt T-Shirt');
});

    //await homePage.addToCart('Sauce Labs Bolt T-Shirt');
    //await page.waitForTimeout(2000);


    


