import {test, expect} from '@playwright/test';
import {HiddenDropDown} from '../pages/HiddenDropDown.js';


//Added second test with UAT tag 

test('Hidden DropDown Test', async ({ page }) => {
test.setTimeout(80000);


    const login = new HiddenDropDown(page);
    await login.website();
    await login.login('Admin', 'admin123');
    await page.waitForTimeout(3000);

    login.clickPIM();
    await page.waitForTimeout(3000);

    login.clickJobTitle('QA Engineer');
    await page.waitForTimeout(3000);
});
    test("UAT TEST @UAT", async({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await page.waitForTimeout(3000);
        await expect(page.locator('.title')).toHaveText('Products');

        
});