import {test, expect} from '@playwright/test';
import {HiddenDropDown} from '../pages/HiddenDropDown.js';

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

    await this.page.goto('https://www.saucedemo.com/');
});