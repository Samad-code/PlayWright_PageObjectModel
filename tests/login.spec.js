import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import { AdditemPage } from '../pages/additemPage';
import { MultipleItems } from '../pages/multipleitemsPage.js';
import { RemoveItems } from '../pages/removeitemPage.js';
import { AboutPage } from '../pages/aboutPage.js';

test("Login with valid credentials", async ({ page }) => {

    //Record video and slow down the execution for better visibility
    /*const browser = await chromium.launch({
            slowMo: 1000,
            headless: false
        });
        const context = await browser.newContext({
            recordVideo: {
                dir: 'videos/'
            }
        });
        const page = await context.newPage();
    */

    //Login
    const loginPage = new LoginPage(page);
    await loginPage.gotologinPage();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    expect(page.locator('.title')).toHaveText('Products');
    //await page.waitForTimeout(2000);


    //About page
    const aboutPage = new AboutPage(page);
    await aboutPage.navigateToAboutPage();
    //await page.waitForTimeout(5000);
    //expect(page.url()).toBe('https://saucelabs.com/');
    const str = await page.locator(':text-is("Sauce AI for Test Authoring: Move from intent to execution in minutes.")').textContent();
    await expect(page.locator(':text-is("Sauce AI for Test Authoring: Move from intent to execution in minutes.")')).toBeVisible();
    console.log(`the heading is visible:   ${str}`);

    const text = await page.locator('h1.MuiTypography-root.MuiTypography-h1.css-hqwp3n').textContent();
    console.log(`About page heading: ${text}`);
    expect(text).toBe("The World's Only Full-Lifecycle AI-Quality Platform");
    console.log("About page is displayed");

    //await page.locator('div.MuiStack-root.navText.navDropdown-text.css-19hiiex').locator('div').nth(0).click();
    //const solutionHeading = await page.locator('h2.MuiTypography-root.MuiTypography-h2.css-1m9j0qg').textContent();
    //console.log(`Solutions page heading: ${solutionHeading}`);
    //expect(solutionHeading).toBe("Solutions");
    //console.log("Solutions page is displayed");

    //await page.waitForTimeout(2000);

    await loginPage.gotologinPage();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    //Home
    const homePage = new HomePage(page);
    await homePage.verifyProductList('Sauce Labs Backpack');
    //expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    //await page.waitForTimeout(2000);


    //Add items to cart
    const additem = new AdditemPage(page);
    await additem.addToCart('Sauce Labs Bike Light');
    //await page.waitForTimeout(2000);

    //Cart
    const cartPage = new CartPage(page);
    await cartPage.verifyCart('Sauce Labs Bike Light');
    await page.waitForTimeout(1500);



    await loginPage.gotologinPage();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    expect(page.locator('.title')).toHaveText('Products');

    //Add 3 items to cart
    const multipleItems = new MultipleItems(page);
    await multipleItems.addMultipleItems(['Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)']);
    //await page.waitForTimeout(2000);

    //Verify all 3 items in cart
    await cartPage.verifyCart('Sauce Labs Fleece Jacket');
    await cartPage.verifyCart('Sauce Labs Onesie');
    await cartPage.verifyCart('Sauce Labs Bolt T-Shirt');
    await cartPage.verifyCart('Test.allTheThings() T-Shirt (Red)');

    //remove items from cart after verification
    const removeitem = new RemoveItems(page);
    await removeitem.removeItems(['Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)']);

    // await removeitem.removeItems(['Sauce Labs Onesie']);



});







