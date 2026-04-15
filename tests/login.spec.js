import { test, expect, chromium } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';


test("Login with valid credentials", async () => {

//Record video and slow down the execution for better visibility
const browser = await chromium.launch({
        slowMo: 1000,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/'
        }
    });
    const page = await context.newPage();


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
    await page.waitForTimeout(1500);
});

    //await homePage.addToCart('Sauce Labs Bolt T-Shirt');
    //await page.waitForTimeout(2000);


    


