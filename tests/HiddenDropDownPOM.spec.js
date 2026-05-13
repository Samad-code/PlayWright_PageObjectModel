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
    //await page.waitForTimeout(3000);

    awaitpage.goto('https://www.saucedemo.com/');

});
    test("UAT TEST @UAT", async({page})=>{
        await page.goto('https://www.saucedemo.com/')

        
//>>>>>>> 8f91b57393ddb8f43819867269ba9c8852c1c715
});